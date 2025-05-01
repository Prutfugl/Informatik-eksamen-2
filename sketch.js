//knapeer til start menyen
let skiftBillede
let skiftNyheder
let Projekter
let musik

//variabler til skiftnyheder
let tilbageKnap //bliver brugt til alle menuerne
let nyhed1
let nyhed2
let nyhed3
let tilføj
let gem
let skraldespand
let scroler

//variabler til skiftbillede
let skiftBilledeBillede

function preload() {
  //preloader alle billederne som skal bruges
  skraldespand = loadImage("skraldespand.png");
  scroler = loadImage("scroler.png");
  skiftBilledeBillede = loadImage("skift billede.png");
  musik = loadImage("Musik.png");
}

function setup() {
  createCanvas(1600, 900);

  Hovedmenu();
  function Hovedmenu(){
  //laver det grafiske layout til hovedmenuen
  background("white");
  let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
  gradiant.addColorStop(0, color(10, 50, 195));
  gradiant.addColorStop(1, color(0, 159, 254));
  drawingContext.fillStyle = gradiant;
  rect(0, 0, 1600, 150);
  textSize(100);
  fill("white");
  text("Studieskærmen - Editor", 50, 100);
  image(musik, 1400,600,150,300)

  // laver knapperne til hovedmenuen
  skiftBillede = createButton("Skift Billede").position(600,300).size(400, 100).style("font-size","50px")
  skiftNyheder = createButton("Skift Nyheder").position(600, 450).size(400, 100).style("font-size","50px")
  Projekter = createButton("Projekter").position(600, 600).size(400, 100).style("font-size","50px")

  //gør at man kan trykke på knapperne
  skiftBillede.mousePressed(() => {
    skiftBillede.remove();
    skiftNyheder.remove();
    Projekter.remove();
    SkiftBillede();
  })
  skiftNyheder.mousePressed(() => {
    skiftBillede.remove();
    skiftNyheder.remove();
    Projekter.remove();
    SkiftNyheder();
  })
  }



  function SkiftNyheder(){
    //laver det grafiske layout til menuen
    background("white");
    let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
    gradiant.addColorStop(0, color(10, 50, 195));
    gradiant.addColorStop(1, color(0, 159, 254));
    drawingContext.fillStyle = gradiant;
    rect(0, 0, 1600, 150);
    textSize(100);
    fill("white");
    text("Studieskærmen - Skift nyheder", 50, 100);
    image(skraldespand, 1150, 300, 100, 100);
    image(skraldespand, 1150, 450, 100, 100);
    image(skraldespand, 1150, 600, 100, 100);
    image(scroler, 400, 300, 100, 420);

    //laver knapperne til menuen
    tilbageKnap = createButton("Tilbage").position(50, 160).size(200, 50).style("font-size","30px")
    nyhed1 = createInput("Galla starter kl. 18:00").position(500, 300).size(600, 100).style("font-size","30px")
    nyhed2 = createInput("Skriv her...").position(500, 450).size(600, 100).style("font-size","30px")
    nyhed3 = createInput("Skriv her...").position(500, 600).size(600, 100).style("font-size","30px")
    tilføj = createButton("Tilføj").position(550, 750).size(200, 100).style("font-size","30px")
    gem = createButton("Gem").position(850, 750).size(200, 100).style("font-size","30px")

    //gør at man kan trykke på knapperne
    tilbageKnap.mousePressed(() => {
      tilbageKnap.remove();
      nyhed1.remove();
      nyhed2.remove();
      nyhed3.remove();
      tilføj.remove();
      gem.remove();
      Hovedmenu();
    })

  }

  function SkiftBillede(){
    //laver det grafiske layout til menuen
    background("white");
    let gradiant = drawingContext.createLinearGradient(0, 0, 1600, 100);
    gradiant.addColorStop(0, color(10, 50, 195));
    gradiant.addColorStop(1, color(0, 159, 254));
    drawingContext.fillStyle = gradiant;
    rect(0, 0, 1600, 150);
    textSize(100);
    fill("white");
    text("Studieskærmen - Skift billeder", 50, 100);
    image(skiftBilledeBillede, 0, 150, 1600, 750);


    //laver knapperne til menuen
    tilbageKnap = createButton("Tilbage").position(50, 160).size(200, 50).style("font-size","30px")

    //gør at man kan trykke på knapperne
    tilbageKnap.mousePressed(() => {
      tilbageKnap.remove();
      Hovedmenu();
    })
  }

}
