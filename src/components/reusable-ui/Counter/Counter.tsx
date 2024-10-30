import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Counter.scss";

export default function Counter({ content }: { content: string }) {
  return (
    <div className="counter-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition key={content} timeout={300} classNames="count">
          <div className="counter">{content}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
