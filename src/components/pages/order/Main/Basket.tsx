import "./Basket.scss";

export default function Basket() {
  return (
    <section className="basket">
      <header className="basket-header">
        <div className="basket-total-label">Total</div>
        <div className="basket-total-value">0.00 €</div>
      </header>
      <div className="basket-content">
        <div className="basket-empty">Votre commande est vide.</div>
      </div>
      <footer className="basket-footer">Codé avec ❤️ et React.js</footer>
    </section>
  );
}
