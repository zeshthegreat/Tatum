# Tatum Domain Address Fetcher

This repository provides a simple way to retrieve an Ethereum address based on a given domain name using Tatum SDK and Space ID. It enables developers to query blockchain addresses associated with specific domains efficiently.

## Getting Started

Follow these steps to set up and run the code.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/zeshthegreat/Tatum.git

Navigate into the project directory:

```bash
cd Tatum

### 2. Install Dependencies
Ensure you have pnpm installed to manage dependencies. Then, install the required packages:

```bash
pnpm install

### 3. Fetch Ethereum Address by Domain
You can retrieve an Ethereum address associated with a domain name by running the following command:

```bash
NODE_NO_WARNINGS=1 node --loader ts-node/esm getAddress.ts <domain_name>



