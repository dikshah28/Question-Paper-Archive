#include <crow.h>

#include <algorithm>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>

int main()
{
    namespace fs = std::filesystem;

    crow::SimpleApp app;

    CROW_ROUTE(app, "/")
    ([]()
    {
        return "Question Paper Archive Backend is working!";
    });

    CROW_ROUTE(app, "/api/paper/<int>/<string>/<int>/<string>")
    ([](
        const crow::request& req,
        int batch,
        std::string branch,
        int semester,
        std::string examType
    )
    {
        const char* subjectValue = req.url_params.get("subject");

        if (subjectValue == nullptr)
        {
            return crow::response(400, "Missing subject.");
        }

        const std::string subject = subjectValue;

        const std::string path =
            "papers/" +
            std::to_string(batch) + "-" +
            std::to_string(batch + 4) + "/" +
            branch + "/" +
            "semester" +
            std::to_string(semester) + "/" +
            examType + "/" +
            subject + ".pdf";

        std::cout << "Paper Path: " << path << std::endl;

        std::ifstream file(path, std::ios::binary);

        if (!file)
        {
            return crow::response(404, "PDF not found: " + path);
        }

        std::string pdf(
            (std::istreambuf_iterator<char>(file)),
            std::istreambuf_iterator<char>()
        );

        crow::response response;
        response.set_header("Content-Type", "application/pdf");
        response.body = pdf;

        return response;
    });

    CROW_ROUTE(app, "/api/catalog")
    ([]()
    {
        crow::json::wvalue catalog = crow::json::wvalue::empty_object();
        catalog["papers"] = crow::json::wvalue::empty_object();

        const fs::path papersRoot = "papers";
       

        if (fs::exists(papersRoot) && fs::is_directory(papersRoot))
        {
            for (const auto& batchEntry : fs::directory_iterator(papersRoot))
            {
                if (!batchEntry.is_directory())
                {
                    continue;
                }

                const std::string batchFolder =
                    batchEntry.path().filename().string();

                if (batchFolder.size() < 4)
                {
                    continue;
                }

                const std::string batch = batchFolder.substr(0, 4);

                for (const auto& branchEntry :
                     fs::directory_iterator(batchEntry.path()))
                {
                    if (!branchEntry.is_directory())
                    {
                        continue;
                    }

                    const std::string branch =
                        branchEntry.path().filename().string();

                    for (const auto& semesterEntry :
                         fs::directory_iterator(branchEntry.path()))
                    {
                        if (!semesterEntry.is_directory())
                        {
                            continue;
                        }

                        const std::string semesterFolder =
                            semesterEntry.path().filename().string();

                        if (semesterFolder.rfind("semester", 0) != 0)
                        {
                            continue;
                        }

                        const std::string semester =
                            semesterFolder.substr(8);

                        for (const auto& examEntry :
                             fs::directory_iterator(semesterEntry.path()))
                        {
                            if (!examEntry.is_directory())
                            {
                                continue;
                            }

                            const std::string examType =
                                examEntry.path().filename().string();

                            std::vector<std::string> subjects;

                            for (const auto& fileEntry :
                                 fs::directory_iterator(examEntry.path()))
                            {
                                if (fileEntry.is_regular_file() &&
                                    fileEntry.path().extension() == ".pdf")
                                {
                                    subjects.push_back(
                                        fileEntry.path().stem().string()
                                    );
                                }
                            }

                            std::sort(subjects.begin(), subjects.end());

                            if (!subjects.empty())
                            {
                                catalog["papers"][batch][branch][semester][examType] =
                                    subjects;
                            }
                        }
                    }
                }
            }
        }

        crow::response response(catalog.dump());
        response.set_header("Content-Type", "application/json");
        response.set_header("Access-Control-Allow-Origin", "*");

        return response;
    });

    app.port(8080).multithreaded().run();

    return 0;
}