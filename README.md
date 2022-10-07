# 環境構築
以下のコマンドをインストールする
- scoop
- hub
- gibo

参考サイト
[GitHub のコマンドラインツール「hub」の基本と便利な使い方のまとめ | DevelopersIO](https://dev.classmethod.jp/articles/hub/)  
[github/hub: A command-line tool that makes git easier to use with GitHub.](https://github.com/github/hub)  
[ScoopInstaller/Scoop: A command-line installer for Windows.](https://github.com/ScoopInstaller/Scoop)  

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
scoop --version
scoop update
scoop install hub
hub --version
scoop install gibo
gibo version
```

PowerShellでhubをgitのエイリアスに設定するのが公式だけど、明確にhubコマンドを利用する方針とするー
```powershell
Set-Alias git hub
```

# リポジトリ作成
作業フォルダを用意する(フォルダ名は任意、リポジトリ名になる)
```powershell
mkdir project-name
cd project-name
git config --global user.name ryohei-ochi-fr
git config user.name
git config --global user.email ryohei.ochi@futurerays.biz
git config user.email
git init
gibo update
gibo dump Node VisualStudioCode > .gitignore
code .
```

githubで取得したアクセストークンを .accesstoken の token に書く(個人的なメモとして)


github に、リポジトリ(remote)を作成する
```powershell
git create
```

`github.com username` メアドじゃないユーザ名 ryohei-ochi-fr
`github.com password` アクセストークン

```
Error creating repository: Unauthorized (HTTP 401)
Bad credentials
```
認証エラーとなる場合はhubの設定ファイルを確認する
```powershell
type ~/.config/hub
```

エラーになっているけど、リポジトリは作成されているのでとりあえずヨシ
```
github.com username: ryohei.ochi@futurerays.biz
github.com password for ryohei.ochi@futurerays.biz (never stored): 
Updating origin
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
error: Could not fetch origin
```

```
PS > git remote -v
origin  git@github.com:ryohei-ochi-fr/project-name.git (fetch)
origin  git@github.com:ryohei-ochi-fr/project-name.git (push)
```

エラーの修正、urlを整える
```powershell
git remote set-url origin https://ryohei-ochi-fr@github.com/ryohei-ochi-fr/blackbox.git
```




ブラウザでリモートリポジトリを確認する
```powershell
hub browse
```

# first commit !
```powershell
git add .
git commit -m "first commit"
git status

git branch

git branch -m master
git push -u origin master
```



[Versioning | NestJS - A progressive Node.js framework](https://docs.nestjs.com/techniques/versioning)



# メモ
```powershell
cd gathering
nest new api
cd api
npm i

npm init -y
npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

## The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file:


npx prisma migrate dev --name init

## PrismaStudio の起動
npx prisma studio



nest g resource record




npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

npm install --save-dev @vegardit/prisma-generator-nestjs-dto


[Prisma 基礎](https://zenn.dev/smish0000/articles/f1a6f463417b65)
[Build a REST API with NestJS, Prisma, PostgreSQL and Swagger](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

npx prisma generate

npx nest generate module prisma
npx nest generate service prisma




## スキーマを変更した場合
npx prisma generate
npx prisma migrate dev --name init







[Build a REST API with NestJS, Prisma, PostgreSQL and Swagger](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

npm i @nestjs/swagger swagger-ui-express --save

[Integrating Swagger with a NestJS Application | by Anukriti Garg | Medium](https://anukritigarg13.medium.com/integrating-swagger-with-a-nestjs-application-f5a7e44ad8c8)



npm i --save @nestjs/typeorm typeorm sqlite3
vi ormconfig.json
vi api\src\tasks\entities\calender.entity.ts
npm run build
npx typeorm migration:generate -d src/database/migrations -n create-calender
npm run build
npx typeorm migration:run



```