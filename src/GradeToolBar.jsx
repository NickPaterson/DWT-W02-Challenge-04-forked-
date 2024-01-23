function Button({ onClick, onMouseOver, onMouseOut, children, style }) {
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={style}
    >
      {children}
    </button>
  );
}

function PassedButton() {
  const handleMouseOver = () => {
    alert("hello");
  };
  const handleMouseOut = () => {
    alert("goodbye");
  };
  return (
    <Button
      onClick={() => alert("You have passed the module!")}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ color: "green" }}
    >
      Passed
    </Button>
  );
}

function FailedButton() {
  return (
    <Button
      onClick={() => alert("Student failed the module!")}
      style={{ color: "red" }}
    >
      Failed
    </Button>
  );
}

export default function GradeToolbar() {
  return (
    <div>
      <PassedButton />
      <FailedButton />
    </div>
  );
}
