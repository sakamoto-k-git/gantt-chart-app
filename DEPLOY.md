# ガントチャートアプリ デプロイガイド

このガイドでは、ガントチャートアプリをGitHub Pagesにデプロイし、Power Appsから表示する手順を説明します。

## 🎯 デプロイ方法の選択

このアプリは以下の方法でデプロイできます:
1. **GitHub Pages** (推奨) - 無料、簡単、自動デプロイ
2. Power Apps Code Apps - 現在技術的制約により動作制限あり

---

# 📦 GitHub Pages デプロイ (推奨)

## 📋 前提条件

1. **GitHubアカウント**
   - https://github.com でアカウント作成

2. **Node.js** (v18以上)
   - https://nodejs.org/ からインストール
   - `node --version` で確認

## 🚀 デプロイ手順

### Step 1: GitHubリポジトリ作成

1. GitHub (https://github.com) にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ設定:
   - **Repository name**: `gantt-chart-app` (任意の名前)
   - **Public** を選択 (GitHub Pages無料プランに必要)
   - 「Create repository」をクリック

### Step 2: コードをプッシュ

ターミナルで以下を実行:

```bash
cd c:\Test\timer-app
git add .
git commit -m "Initial commit: Gantt Chart App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gantt-chart-app.git
git push -u origin main
```

> **注意**: `YOUR_USERNAME`を実際のGitHubユーザー名に置き換えてください

### Step 3: GitHub Pages を有効化

1. GitHubリポジトリページで「Settings」タブをクリック
2. 左サイドバーから「Pages」を選択
3. 「Source」セクションで:
   - Source: **GitHub Actions** を選択
4. 自動的にデプロイが開始されます

### Step 4: デプロイ完了確認

1. リポジトリの「Actions」タブで進行状況を確認
2. ✅ デプロイ完了後、以下のURLでアクセス可能:
   ```
   https://YOUR_USERNAME.github.io/gantt-chart-app/
   ```

---

# 🔗 Power Apps との統合

GitHub Pagesにデプロイした後、Power Appsから表示します。

## Step 1: Power Appsで新しいCanvas Appを作成

1. https://make.powerapps.com にアクセス
2. 「+ Create」→「Canvas app」を選択
3. アプリ名: 「ガントチャート管理」
4. フォーマット: Tablet

## Step 2: iframeコンポーネントを追加

1. 左メニューから「Insert」→「Media」→「iframe」を選択
2. iframeプロパティを設定:
   - **Src**: `"https://YOUR_USERNAME.github.io/gantt-chart-app/"`
   - **Width**: `Parent.Width`
   - **Height**: `Parent.Height`

## Step 3: アプリを保存して共有

1. 右上の「Save」で保存
2. 「Publish」でアプリを公開
3. 「Share」でユーザーに共有

---

# ⚠️ Power Apps Code Apps デプロイ (参考)

現在、Power Apps Code Appsの技術的制約により、直接デプロイは動作制限があります。

## 📋 前提条件

### 必要なツール

1. **Node.js** (v18以上)
   - https://nodejs.org/ からインストール
   - `node --version` で確認

2. **Power Platform CLI**
   - インストール方法: https://aka.ms/PowerAppsCLI
   - `pac --version` で確認

3. **Power Apps環境**
   - Microsoft 365アカウント
   - Power Appsライセンス
   - 開発/本番環境へのアクセス権限

## 🚀 デプロイ手順

### Step 1: Power Platform認証

```bash
pac auth create
```

**実行結果**:
- ブラウザが自動的に開きます
- Microsoft 365アカウントでサインイン
- 認証が完了すると、ターミナルに成功メッセージが表示されます

### Step 2: 利用可能な環境を確認

```bash
pac org list
```

**出力例**:
```
Friendly Name         Environment ID                        
-----------------------------------------------------
開発環境             12345678-1234-1234-1234-123456789abc
本番環境             87654321-4321-4321-4321-cba987654321
```

デプロイ先の環境IDをコピーします。

### Step 3: Power Apps Code Appsの初期化

```bash
pac code init --environment [環境ID] --displayName "プロジェクト管理 - ガントチャート"
```

**具体例**:
```bash
pac code init --environment 12345678-1234-1234-1234-123456789abc --displayName "プロジェクト管理 - ガントチャート"
```

**実行結果**:
- `power.config.json`が更新されます
- 環境IDとアプリ名が保存されます

### Step 4: Power Platform環境でローカルテスト（推奨）

本番デプロイ前に、Power Platform認証付きでローカルテストを実行します：

```bash
npm run dev
```

**確認事項**:
- ✅ http://localhost:3000 でアプリが起動
- ✅ Power Platform認証が実行される
- ✅ ヘッダーにユーザー名が表示される
- ✅ ガントチャートとタスク一覧が正常に表示される

問題がなければ、Ctrl+C でサーバーを停止。

### Step 5: プロダクションビルド

```bash
npm run build
```

**実行結果**:
- `dist/`フォルダにビルド成果物が生成されます
- ビルドサイズとファイル一覧が表示されます

**出力例**:
```
✓ built in 146ms
dist/index.html                   0.49 kB
dist/assets/index-DwGfrJPa.css    6.95 kB
dist/assets/index-Do664zv9.js   203.44 kB
```

### Step 6: Power Appsへデプロイ

```bash
pac code push
```

**実行結果**:
- アプリケーションがPower Platform環境にアップロードされます
- デプロイが完了すると、成功メッセージが表示されます

**所要時間**: 通常1〜3分

### Step 7: デプロイの確認

1. [Power Apps ポータル](https://make.powerapps.com)を開く
2. 左メニューの「アプリ」をクリック
3. 「すべて」タブで「プロジェクト管理 - ガントチャート」を検索
4. アプリをクリックして実行

**確認事項**:
- ✅ アプリが正常に起動する
- ✅ ユーザー情報が表示される
- ✅ すべてのタスクが表示される
- ✅ ガントチャートが正しくレンダリングされる

## 🔄 更新デプロイ

アプリを更新する場合：

```bash
# 1. コードを修正
# 2. ローカルテスト
npm run dev

# 3. ビルド
npm run build

# 4. 再デプロイ
pac code push
```

既存のアプリが上書き更新されます。

## 🌍 複数環境への展開

### 開発環境へのデプロイ

```bash
pac code init --environment [開発環境ID] --displayName "プロジェクト管理 - ガントチャート (Dev)"
npm run build
pac code push
```

### 本番環境へのデプロイ

```bash
pac code init --environment [本番環境ID] --displayName "プロジェクト管理 - ガントチャート"
npm run build
pac code push
```

## 📱 ユーザーへの共有

### Power Appsポータルから共有

1. [Power Apps ポータル](https://make.powerapps.com)を開く
2. 「アプリ」→「プロジェクト管理 - ガントチャート」
3. 「...」→「共有」をクリック
4. ユーザーまたはグループを追加
5. 権限レベルを選択（ユーザー/共同所有者）
6. 「共有」をクリック

### Teamsに埋め込み（オプション）

1. Power Appsポータルでアプリを開く
2. 「...」→「Teamsに追加」
3. チームまたはチャネルを選択
4. アプリがTeamsタブとして追加されます

## 🔧 トラブルシューティング

### ビルドエラー: "Package subpath '.' is not defined"

**解決方法**: `vite.config.ts`で@microsoft/power-appsを外部化

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@microsoft/power-apps'],
    }
  }
})
```

### pac code push エラー: "Not authenticated"

**解決方法**: 認証を再実行

```bash
pac auth clear
pac auth create
```

### デプロイ後にアプリが見つからない

**確認事項**:
1. 正しい環境を選択しているか確認
2. Power Appsポータルで環境を切り替え
3. 「すべて」タブで検索

### ローカルで動くがPower Appsで動かない

**原因**: Power Apps SDKの初期化エラー

**確認事項**:
- `App.tsx`でSDK初期化が正しく実装されているか
- ブラウザの開発者ツールでエラーを確認
- Power Platform認証が正常に完了しているか

## 📚 関連リンク

- [Power Apps Code Apps 公式ドキュメント](https://learn.microsoft.com/en-us/power-apps/developer/code-apps/)
- [Power Platform CLI リファレンス](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction)
- [開発標準リポジトリ](https://github.com/geekfujiwara/CodeAppsDevelopmentStandard)

## ✅ デプロイチェックリスト

デプロイ前に確認：

- [ ] Node.jsとPower Platform CLIがインストール済み
- [ ] Power Platform認証が完了している
- [ ] ローカルテストが成功している
- [ ] `npm run build`が成功している
- [ ] 正しい環境IDを使用している
- [ ] アプリ名が適切に設定されている

デプロイ後に確認：

- [ ] Power Appsポータルでアプリが表示される
- [ ] アプリが正常に起動する
- [ ] すべての機能が動作する
- [ ] 必要なユーザーと共有されている

---

**次のステップ**: [Phase 3 - データソース統合](https://github.com/geekfujiwara/CodeAppsDevelopmentStandard/blob/main/PHASE3_DATA_INTEGRATION.md)

Dataverseと統合してタスクを永続化し、複数ユーザーでのデータ共有を実現できます。
