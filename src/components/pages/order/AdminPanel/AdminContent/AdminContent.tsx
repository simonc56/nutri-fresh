import "./AdminContent.scss";

export default function AdminContent({ content }: { content: string }) {
  return <div className="admin-content">{content}</div>;
}
