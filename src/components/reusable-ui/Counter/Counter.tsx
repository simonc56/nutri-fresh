import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useTransitionNodeRef } from "src/hooks/useTransitionNodeRef";
import "./Counter.scss";

export default function Counter({ content, isLeftAlign = false }: { content: string; isLeftAlign?: boolean }) {
  const { getNodeRef } = useTransitionNodeRef<string, HTMLDivElement>();

  const nodeRef = getNodeRef(content);

  return (
    <div className="counter-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition key={content} nodeRef={nodeRef} timeout={300} classNames="count">
          <div ref={nodeRef} className={`counter-${isLeftAlign ? "left" : "right"}`}>
            {content}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
