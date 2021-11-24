import './App.css';

function App() {
  const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    const author = {
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: " · 26 февр."
    }
  return(
    <div className = "container">
    <img src = {ANAKIN_IMAGE} className = "avtor-img" alt = "" />
    <div className = "text">{author.name} <img src = "https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png" className = "lil" alt = ""/>  {author.nickname} {author.date}<br/>
    {author.content}
    </div>
    <img src = {RAY_IMAGE} className = "post-img" alt = "" />
</div>
  )
}

export default App;
