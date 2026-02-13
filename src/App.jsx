import { useState } from "react";
import "./valentine.css";

export default function  App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`page ${open ? "open" : ""}`}>

      <div className="envelope" onClick={() => setOpen(true)}>
        <div className="back"></div>
        <div className="hearts"></div>
        <div className="flap"></div>
        <div className="front"></div>
      </div>
      <div className="message-position">
      <div className="message-float">
<div className={`heart-burst ${open ? "show" : ""}`}>
  {[...Array(20)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0.6}s`,
        fontSize: `${30 + Math.random() * 40}px`,
      }}
    >
      ❤
    </span>
  ))}
</div>
  <div className="floating-hearts">
  <span>❤</span>
  <span>❤</span>
  <span>❤</span>
  <span>❤</span>
</div>
      <div className="message-card">
          <img
    src="src/assets/S__7307276.jpg"
    alt="valentine"
    className="card-image"
    
  />
        <h2>Happy Valentine na bowie ❤️</h2>
      <div className="message-text">
    วันนี้วันอะไรไม่รู้ วันที่14รึเปล่าา นี้ก็เดือนที่สามแล้วที่เราคบกัน☺️ ก็ยังรู้สึกโชคดีที่มีหนูเข้ามาในชีวิต ถึงบ้างเรื่องเราจะไม่เข้าใจกันก็ตาม😆 แต่ยังไงก็รักเหมือนเดิมนะคะ รักเสมอและจะรักต่อไปคับ จาก Ne
        </div>
      </div>
    </div>
  </div>
</div>
  );
}