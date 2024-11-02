import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Counter.scss";

export default function Counter({ content, isLeftAlign = false }: { content: string; isLeftAlign?: boolean }) {
  return (
    <div className="counter-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition key={content} timeout={300} classNames="count">
          <div className={`counter-${isLeftAlign ? "left" : "right"}`}>{content}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
