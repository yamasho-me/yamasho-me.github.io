# Shogo Yamagishi — Personal portfolio

研究・技術・制作活動と経歴をまとめた個人サイトです。HTML / CSS / JavaScriptだけで動作し、ビルドやパッケージのインストールは不要です。

全5ページは英語を主、日本語を補足として同じページ内に掲載しています。日本語の補足には`<span class="ja" lang="ja">`を使い、英語の下に小さく表示します。見出し・固有名詞・要点を中心に併記し、重複する説明は増やさない方針です。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | プロフィール概要、研究、主な活動、経歴 |
| `about.html` | 経歴、研究業績、表彰、資格・修了講座、ボランティア、スキル |
| `projects.html` | カンナスクールコンタクト、映像制作、科学クラブ、オープンデータへのリンク |
| `video.html` | 映像制作・配信・音響 |
| `contact.html` | お問い合わせフォームへのリンク |
| `style.css` | 全ページ共通のデザインとレスポンシブ設定 |
| `video_style.css` | 映像制作ページ固有のレイアウト |
| `script.js` | テーマ切り替え、モバイルメニュー、著作権年の更新 |

## プレビュー

`index.html`をブラウザーで直接開いて確認できます。ローカルサーバーを利用する場合は、リポジトリのルートで次を実行します。

```sh
python -m http.server 8000 --bind 127.0.0.1
```

ブラウザーで `http://127.0.0.1:8000` を開いてください。

## 内容の更新

- **経歴**：`about.html`の`#career`と、トップページの経歴概要を編集します。
- **研究**：`about.html`の`#research`を更新します。トップの要約も合わせて更新してください。理論・計算化学と電子情報工学を研究分野として記載し、両者の融合を目指す方向性を紹介しています。個別の発表・卒研題目は研究業績欄にまとめます。
- **表彰・資格**：`about.html`の`#achievements`に追加します。新しい表彰は上に並べます。
- **研究業績**：`about.html`の`#publications`（Research Outputs）に、論文・学会発表・卒業研究を記載します。現在は九重分子科学セミナー2026の口頭発表、KICSS 2025の論文2件、高専での卒業研究を掲載しています。論文には著者・題名・発表先・年月・DOIを記載します。
- **ボランティア**：`about.html`の`#volunteer`に役割・所属・開始年月・終了年月を記載します。活動中の場合は終了年月を「現在」とします。
- **スキル**：`about.html`の`#skills`に、研究・技術、言語・環境、制作・広報に分けて記載します。言語・環境はモノクロのアイコンを並べ、LISP・Verilogは文字を四角で囲みます。名称は画像の`alt`と各項目の`title`に記載します。
- **活動**：`projects.html`の`#work-list`にある`li`を参考に、活動名とリンクを記載します。研究テーマ・論文はAboutにまとめています。カンナスクールコンタクトはプロジェクト全体の統括・マネジメントとして扱います。
- **お問い合わせ**：既存のGoogleフォームを別タブで開きます。フォームを変更するときは、`contact.html`の「お問い合わせフォームへ」のURLを変更します。
- **共通ナビゲーション・SNS**：静的HTMLなので全5ページに記載しています。リンクの変更は各ページに反映してください。
- **配色**：`style.css`冒頭のCSS変数を編集します。初期設定はダークテーマで、選択したテーマをブラウザーに保存します。

外部リンクは別タブで開きます。JavaScriptが無効でもページ本文・ナビゲーション・全活動を閲覧できます。GoogleフォームとGoogle Analyticsは外部サービスへの接続が必要です。

資格・修了講座、表彰、ボランティア歴、スキルは、本人が提供したLinkedInの記載に基づきます。防災士の重複は1件に統合し、「Jav」は既存サイトの表記に合わせて「Java」としています。学生表彰の年度と受賞年月は区別しています。

プロフィールの動機と研究方針は本人の説明に基づきます。技術や化学で日常を良くすることを目指し、高専で電子情報工学と社会実装に取り組んだ後、より本質的な理解を求めて金沢大学融合学域で理論・計算化学を研究しています。電子情報工学と化学の融合は、本人が目指す方向性として記載しています。

デジタル推進委員は「資格・修了講座・委嘱」の一覧にまとめ、他の項目と同じ形式で表示しています。委嘱年月は未確認のため記載していません。オープンバッジは画像ではなく確認用リンクとして掲載しています。

言語・環境のロゴ5点は[Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0)から取得し、`images/skills/`に保存しています。Cはoriginal、Python・Ruby・Javaはplain版、Ubuntuはplain版から背景の縦長タグを除いた丸いシンボルのみを使用しています。CSSで明暗のテーマに合わせた単色に統一しています。配布元のMITライセンスは同フォルダーの`LICENSE.devicon`にあります。LISP・VerilogはCSSの枠付き文字です。SQLは正式なロゴではなく、データベースを表す自作の汎用記号を使用しています。表示時に外部CDNへの接続は不要です。

論文の著者・題名・発表先・発行日は、電子情報通信学会の[マイコンシミュレーター論文](https://www.ieice.org/publications/proceedings/summary.php?expandable=16&iconf=KICSS&number=18&session_num=Session+4&year=2025)と[KJ法比較論文](https://www.ieice.org/publications/proceedings/summary.php?expandable=16&iconf=KICSS&number=3&session_num=Session+1&year=2025)で確認しています。

九重分子科学セミナー2026の口頭発表と日本語題目は、[堀研究室の学会発表記録](https://hori.w3.kanazawa-u.ac.jp/events/entry13.html)で確認しています。開催期間は[セミナー公式ページ](https://sites.google.com/view/imce-theoretical-chemistry/kujyu2026)に記載の2026年9月4～5日です。英語のセミナー名と発表題目は日本語からの翻訳です。

卒業研究の英語題目「Investigation of AI Models for Generating Computer-Generated Holograms from Planar Images」は本人指定の表記です。実施年月は未確認のため記載していません。

## 公開

既存のGitHub Pages向けの構成です。公開先URLは `https://yamasho-me.github.io/` を前提にしています。ドメインを変更する場合は各HTMLのcanonical・OGP、`robots.txt`、`sitemap.xml`、サイトマップ生成ワークフローのURLも更新してください。
