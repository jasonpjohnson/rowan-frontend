function BtnBorder({ children, border = 'border-2' }) {
  return (
    <div
      className={`${border} border-solid border-brand inline-block text-center`}
    >
      {children}
    </div>
  );
}

export default BtnBorder;
