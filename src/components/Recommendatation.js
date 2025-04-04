function Recommendation(){
    const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <=5 

  if (!isSpring) {
    <div> Ce n'est pas le moment de remporter ..</div>
  }

  return <div> C'est le printemps, remporter ..</div>
}
export default Recommendation