export const convertContentLinks = (text: string) => {
  const parts = text.split(/(@\w+|#\w+|www\.\S+|\bhttps?:\/\/\S+\b)/g);

  return parts.map((part, index) => {
    if (part.startsWith("@")) {
      const username = part.substring(1);
      return (
        <span key={index}>
          <a href={`/users?username=${username}`}>{part}</a>
        </span>
      );
    } else if (part.startsWith("#")) {
      const tag = part.substring(1);
      return (
        <span key={index}>
          <a href={`/posts?search=${tag}`}>{part}</a>
        </span>
      );
    } else if (part.startsWith("www.") || part.startsWith("http")) {
      return (
        <span key={index}>
          <a href={part.startsWith("www.") ? `http://${part}` : part}>{part}</a>
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};
