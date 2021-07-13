export const Card: React.FC<{ children: any; [key: string]: any }> = ({
  children,
  ...rest
}) => {
  //   let x = 0;
  //   console.log("TODO-LIST-CARD", "update trigger", x++);
  return (
    <div className="Card" {...rest}>
      {children}
    </div>
  );
};
