export const Item = (className, { link, imageSrc, altSrc }) => {
  return (
    <>
      <a href={link} className={className}>
        <img src={imageSrc} alt={altSrc} />
      </a>
    </>
  );
};
