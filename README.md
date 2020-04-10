# REI Search Bar - System Design Capstone

> This project takes a pre-existing search bar microservice and rebuilds the back-end to achieve these goals:
  - Expand the database size from 100 entries to 10M entries
  - Achieve query time < 50 ms for all database queries used by the service API, targeting last 10% of database entries
  - Stress test service in development (own laptop) to achieve ~1K RPS with < 1% error rate
  - Scale back-end to improve throughput on EC2 T2.micro instance(s) to 100 RPS (min) w/ < 1% error rate (streeeeeeetch goal: 10K RPS w/ < 1% error rate)

## Related Projects

  - https://github.com/10-Million-Dog-Goggles/product-view-service
  - https://github.com/10-Million-Dog-Goggles/q-and-a-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

See dev journal.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

