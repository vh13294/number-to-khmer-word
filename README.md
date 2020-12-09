<p align="center">
  <img width="40%" src="https://user-images.githubusercontent.com/17086745/97110220-8bf2f780-170a-11eb-9bf4-ca38b8d41be9.png" />
</p>

<h2 align="center">Javascript and Typescript library for converting Arabic numerals to Khmer words</h2>

<p align="center">
<a href="https://www.codefactor.io/repository/github/vh13294/nestjs-url-generator"><img src="https://www.codefactor.io/repository/github/vh13294/nestjs-url-generator/badge" alt="CodeFactor" /></a>
<a href="https://www.npmjs.com/package/nestjs-url-generator"><img src="https://img.shields.io/npm/v/nestjs-url-generator.svg?style=flat-square&sanitize=true" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/nestjs-url-generator"><img src="https://img.shields.io/npm/dm/nestjs-url-generator.svg?style=flat-square&sanitize=true" alt="NPM Downloads" /></a>
<a href="#"><img src="https://img.shields.io/npm/l/nestjs-url-generator.svg?colorB=black&label=LICENSE&style=flat-square&sanitize=true" alt="License"/></a>

</p>

# Description

URL

# Installation

```bash
npm i --save nestjs-url-generator
```


# Basic Usage

### Include Module

First you need to import [UrlGeneratorModule]:


```ts
import { UrlGeneratorModule } from 'nestjs-url-generator';

@Module({
    imports: [
        UrlGeneratorModule.forRoot({
            secret: 'secret', // optional, required only for signed URL
            appUrl: 'localhost:3000',
        })
    ],
})
export class ApplicationModule {}
```


## Note
- Changing


### TODO
- [ ] Create