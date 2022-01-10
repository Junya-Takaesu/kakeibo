# Kakeibo アプリ

## コンパイル(トランスパイル)
```
npm run build
```
- package.json に記載されている build の webpack コマンドが実行されて、webpack のコンパイル(トランスパイル)が実行される
  - `npx webpack --config webpack.config.js` と同等
- build が成功すると、dist ディレクトリにコンパイル(トランスパイル)されたファイルが出力される