
const TitleName = (props:any) => {
    return (
      <>
        <section className="titleName_section">
          <div className="titleSubTitle ">{props.subTitle}</div>
          <div className="titleTitle">{props.title}</div>
        </section>
      </>
    );
  };
  
  export default TitleName;
  