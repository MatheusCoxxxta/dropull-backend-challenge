# Dropull Challenge

### Setup
Create `.env` on project **root** and paste `.env.example` **content** into it.

Using database from docker:
```bash
$ docker-compose up -d #docker compose required
```

### Installing

Clone:
```
$ git clone https://github.com/MatheusCoxxxta/dropull-backend-challenge.git
```

Install dependencies:
```
$ yarn
```
### Running

Run application on localhost:
```
$ yarn dev:server
```


### Testing

Run tests:
```
$ yarn test
```

### TO DO / Improvements / Points to discuss

* Define IRequest interface concating Request from Express + files
* Use Tsyringe for Dependency Injection instead of scratch injection


### Docs

- Assets
```
POST /assets

Input:
Body Type: FormData
{
  image: File
  name: string
  description: string
}

Output:
{
  id: string,
  name: string,
  tokenIpfs: string
}
```

```
GET /assets

Output:
[{
  id: string,
  name: string,
  description: string,
  imageUrl: string,
  tokenIpfs: string,
  createdAt: Date,
  nfts: []
}]
```

- NFTs
```
POST /nft

Input:
Body Type: JSON
{
  amount: number
  assetId: string
}

Output:
  {
    assetId: string,
    token: string,
    id: string
  },
```

```
GET /nft

Output:
[{
  id: string,
  token: string,
  asset: {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    tokenIpfs: string,
    createdAt: Date
  }
}]
```
