/* 20% complete */
export function SmallCharityCard20({image, title, moneyraised, description, moneygoal}) {
  
  return (
    
    <div style={SmallCharityCardStyles.educationcard}>
      <img style={SmallCharityCardStyles.image} src={image} alt="image" />
      <div style={SmallCharityCardStyles.info}>
      <h1 style={SmallCharityCardStyles.cardtitle}>{title}</h1>
      <p style={SmallCharityCardStyles.carddescription}>{description}
        <p style={SmallCharityCardStyles.moneyraised}>${moneyraised} USD raised of {moneygoal} goal</p>
      </p>
      <div style={SmallCharityCardStyles.overlap}>
        <div style={SmallCharityCardStyles.greybar}></div>
        <div style={SmallCharityCardStyles.colorbar20}></div>
        </div>
        </div>
    </div>

  );
}

/* 45% complete */
export function SmallCharityCard45({image, title, moneyraised, description, moneygoal}) {
  
  return (
    
    <div style={SmallCharityCardStyles.educationcard}>
      <img style={SmallCharityCardStyles.image} src={image} alt="image" />
      <div style={SmallCharityCardStyles.info}>
      <h1 style={SmallCharityCardStyles.cardtitle}>{title}</h1>
      <p style={SmallCharityCardStyles.carddescription}>{description}
        <p style={SmallCharityCardStyles.moneyraised}>${moneyraised} USD raised of {moneygoal} goal</p>
      </p>
      <div style={SmallCharityCardStyles.overlap}>
        <div style={SmallCharityCardStyles.greybar}></div>
        <div style={SmallCharityCardStyles.colorbar45}></div>
        </div>
        </div>
    </div>

  );
}

/* 70% complete */
export function SmallCharityCard70({image, title, moneyraised, description, moneygoal}) {
  
  return (
    
    <div style={SmallCharityCardStyles.educationcard}>
      <img style={SmallCharityCardStyles.image} src={image} alt="image" />
      <div style={SmallCharityCardStyles.info}>
      <h1 style={SmallCharityCardStyles.cardtitle}>{title}</h1>
      <p style={SmallCharityCardStyles.carddescription}>{description}
        <p style={SmallCharityCardStyles.moneyraised}>${moneyraised} USD raised of {moneygoal} goal</p>
      </p>
      <div style={SmallCharityCardStyles.overlap}>
        <div style={SmallCharityCardStyles.greybar}></div>
        <div style={SmallCharityCardStyles.colorbar70}></div>
        </div>
        </div>
    </div>

  );
}

/* 90% complete */
export function SmallCharityCard90({image, title, moneyraised, description, moneygoal}) {
  
  return (
    
    <div style={SmallCharityCardStyles.educationcard}>
      <img style={SmallCharityCardStyles.image} src={image} alt="image" />
      <div style={SmallCharityCardStyles.info}>
      <h1 style={SmallCharityCardStyles.cardtitle}>{title}</h1>
      <p style={SmallCharityCardStyles.carddescription}>{description}
        <p style={SmallCharityCardStyles.moneyraised}>${moneyraised} USD raised of {moneygoal} goal</p>
      </p>
      <div style={SmallCharityCardStyles.overlap}>
        <div style={SmallCharityCardStyles.greybar}></div>
        <div style={SmallCharityCardStyles.colorbar90}></div>
        </div>
        </div>
    </div>

  );
}

/* 100% complete */
export function SmallCharityCardComplete({image, title, moneyraised, description}) {
  
  return (
    
    <div style={SmallCharityCardStyles.educationcard}>
      <img style={SmallCharityCardStyles.image} src={image} alt="image" />
      <div style={SmallCharityCardStyles.info}>
      <h1 style={SmallCharityCardStyles.cardtitle}>{title}</h1>
      <p style={SmallCharityCardStyles.carddescription}>{description}
        <p style={SmallCharityCardStyles.moneyraised}>{moneyraised} USD goal reached!</p>
      </p>

    </div>
    </div>

  );
}

export default SmallCharityCardComplete;

export const SmallCharityCardStyles = {
  educationcard:{
    display: "flex",
    flexDirection: "row",
    alignItems:"flex-start",
    padding: "16px",
    margin: 30,
    

    width: "480px",
    height: "160px",
    
    borderRadius: 10,
    background: "#FFFFFF",
  },
  image: {
    width: "128px",
    height: "128px",
    
    borderRadius: 4,
},
cardtitle: {
  width: "354px",
  height: "24px",
  marginLeft: 20,
  
  fontFamily: 'Euclid Circular B',
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 20,
  lineHeight: "120%",

  flex: "none",
    order: 0,
    flexGrow: 0
},
carddescription: {
    width: "276px",
    height: "36px",
    marginLeft: 20,
    
    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: "120%",
    left: "155px",
    top: "60px",

    flex: "none",
    order: 1,
    flexGrow: 0
},
moneyraised: {
  marginTop: 10,
  padding: 0,
  width: "250px",
  height: "19px",
  
  fontFamily: 'Euclid Circular B',
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 15,
  lineHeight: "19px",

  textAlign: "center",

  color: "#709E9B"
},


/* colorbars */
colorbar20: {
  width: "70px",
  height: "9px",
  marginTop: 45,
  marginLeft: 20,
  
  background: "linear-gradient(270deg, #EDCBB1 -21.94%, #709E9B 82.37%)",
  borderRadius: 10,

  gridRowStart: "1",
  gridColumnStart: 1
},
colorbar45: {
  width: "144px",
  height: "9px",
  marginTop: 45,
  marginLeft: 20,
  
  background: "linear-gradient(270deg, #EDCBB1 -21.94%, #709E9B 82.37%)",
  borderRadius: 10,

  gridRowStart: "1",
  gridColumnStart: 1
},
colorbar70: {
  width: "200px",
  height: "9px",
  marginTop: 45,
  marginLeft: 20,
  
  background: "linear-gradient(270deg, #EDCBB1 -21.94%, #709E9B 82.37%)",
  borderRadius: 10,

  gridRowStart: "1",
  gridColumnStart: 1
},
colorbar90: {
  width: "275px",
  height: "9px",
  marginTop: 45,
  marginLeft: 20,
  
  background: "linear-gradient(270deg, #EDCBB1 -21.94%, #709E9B 82.37%)",
  borderRadius: 10,

  gridRowStart: "1",
  gridColumnStart: 1
},






greybar: {
  width: "307px",
  height: "9px",
  marginTop: 45,
  marginLeft: 20,
  
  background: "#ECECEC",
  borderRadius: 10,

  gridRowStart: "1",
  gridColumnStart: 1,
},
overlap: {
  display: "grid",
  gridTemplateColumns: "1fr"
}
}
