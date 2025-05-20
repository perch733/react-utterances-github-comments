# react-utterances-github-comments

💬 A lightweight React wrapper for [Utterances](https://utteranc.es/), the GitHub-powered comment widget.

---

## ✨ Features

- ✅ Lightweight and framework-agnostic (just React)
- 📝 Uses GitHub issues to store comments
- 🎨 Theme support (light, dark, preferred-color-scheme)
- 💻 Ideal for blogs, documentation, or static sites

---

## 📦 Installation

```bash
npm install react-utterances-github-comments
```

or

```bash
yarn add react-utterances-github-comments
```

---

## 🚀 Usage

```tsx
import GithubComments from 'react-utterances-github-comments';

function BlogPost() {
  return (
    <GithubComments
      repo="your-username/your-repo"
      issueTerm="pathname"
      theme="github-light"
      label="comentario"
      titleText="Deja tu comentario"
      loadingText="Cargando comentarios..."
    />
  );
}
```

---

## ⚙️ Props

| Prop          | Type     | Required | Description |
|---------------|----------|----------|-------------|
| `repo`        | string   | ✅       | GitHub repo in the format `user/repo` |
| `issueTerm`   | string   | ✅       | How issues are matched: `pathname`, `url`, `title`, etc. |
| `theme`       | string   | ❌       | Utterances theme (`github-light`, `github-dark`, etc.) |
| `label`       | string   | ❌       | GitHub issue label |
| `titleText`   | string   | ❌       | Title shown above the comment box |
| `loadingText` | string   | ❌       | Text shown while Utterances is loading |
| `className`   | string   | ❌       | Custom class for the wrapping `<section>` |

---

## 🧪 Example with dynamic theme switching

```tsx
const [theme, setTheme] = useState('github-light');

return (
  <>
    <select onChange={(e) => setTheme(e.target.value)}>
      <option value="github-light">Light</option>
      <option value="github-dark">Dark</option>
      <option value="preferred-color-scheme">Auto</option>
    </select>

    <GithubComments
      repo="your-username/your-repo"
      issueTerm="pathname"
      theme={theme}
    />
  </>
);
```

---

## 📄 License

MIT

---

## ✍️ Author

Made with ❤️ by Percy Chuzon  
📧 contacto@percychuzon.com  
🔗 [GitHub](https://github.com/perch33)
