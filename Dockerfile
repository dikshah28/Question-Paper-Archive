FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    git \
    libasio-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN cmake -S . -B /opt/build -DCMAKE_BUILD_TYPE=Release \
    && cmake --build /opt/build --parallel

EXPOSE 10000
CMD ["/opt/build/server"]
