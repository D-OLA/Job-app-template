import React from 'react';
import './home.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Card} from 'react-bootstrap';
import Image1 from '../images/rent.png'


const Home = () => {
    return (
        <div className="App">
            <div className="Container" id="banner">
                <center>
                    <p className='bannerTitle'><strong>When you're ready for a change,</strong></p>
                    <p className='bannerTitle'><strong>we're ready to help!</strong></p>
                    <input type="text" id='bannerSearch' placeholder="Search.."></input>
                </center>
            </div>
            <div id='cards'>
                <center>
                    <h5>Whether you are buying, selling or renting,</h5>
                    <h5>we can help you move forward.</h5>
                </center>
            </div>
            <div id='3cards'>
                <center>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Img src='https://loveincorporated.blob.core.windows.net/contentimages/main/489653dc-3765-4af8-b2d6-79ed05517815-selling-a-house-with-tenants.jpg'/>
                                    <Card.Body>
                                        <Card.Title>
                                            Sell your home
                                        </Card.Title>
                                        <Card.Text>
                                            this is boykas profileLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor nibh sapien. Maecenas sollicitudin dolor et neque pharetra pharetra. Morbi interdum, mauris et condimentum ultrices, felis elit efficitur velit, eu consectetur mi ligula at ante. Quisque vitae euismod nisl. Aenean blandit lorem vel dui semper, et lobortis ante pharetra.rd
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img src='https://qph.fs.quoracdn.net/main-qimg-07b0a4d234a3bd0a1e3378709e460713'/>
                                    <Card.Body>
                                        <Card.Title>
                                            Contractors
                                        </Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor nibh sapien. Maecenas sollicitudin dolor et neque pharetra pharetra. Morbi interdum, mauris et condimentum ultrices, felis elit efficitur velit, eu consectetur mi ligula at ante. Quisque vitae euismod nisl. Aenean blandit lorem vel dui semper, et lobortis ante pharetra.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img src='https://www.enr.com/ext/resources/custom-content/Infocenter/2019/IFS/2019_ECI_P1-Cover-eBook_2.jpg?1554231953'/>
                                    <Card.Body>
                                        <Card.Title>
                                            Realtors
                                        </Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor nibh sapien. Maecenas sollicitudin dolor et neque pharetra pharetra. Morbi interdum, mauris et condimentum ultrices, felis elit efficitur velit, eu consectetur mi ligula at ante. Quisque vitae euismod nisl. Aenean blandit lorem vel dui semper, et lobortis ante pharetra.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </center>
            </div>
            <div id='newsletter'>
                <Container>
                    <center>
                        <h4>Subscribe to our newsletter</h4>
                        <input type='text' id='newsletterText' placeholder='Please enter your e-mail...'></input>
                        <input type='submit' id='butt'></input>
                    </center>
                </Container>
            </div>
            <div id='backT'>
                <center>
                    <Container id='stub'>
                        <Row className='push'>
                            <Col>
                                <h4>Buy</h4>
                                <p className='para'>Sed tristique, urna vitae tempus tristique, massa nisi venenatis neque, a auctor metus lacus non lacus. Donec rhoncus tristique malesuada. Aliquam ac augue justo. In condimentum tempor ligula, mollis sagittis lorem tempus eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod erat ac arcu egestas maximus. Morbi id porta dui. Sed consequat venenatis magna ac fringilla. Nulla interdum rutrum sodales. Morbi mattis id ex vitae scelerisque. Curabitur eget lorem ante. Proin nisl eros, dignissim vel erat eu, commodo fermentum urna. Mauris non commodo sapien.</p>
                            </Col>
                            <Col><img className='cunts' src={Image1}/></Col>
                        </Row>
                        <Row className='push'>
                            <Col><img className='cunts' src={Image1}/></Col>
                            <Col>
                                <h4>Sell</h4>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque nisl et odio efficitur tempus. Donec ac viverra ante, ut accumsan mi. Pellentesque egestas ligula lorem, placerat elementum nisi tincidunt sed. Pellentesque fringilla sapien ut nibh imperdiet molestie. Donec mollis diam tellus, sit amet tempus lectus consectetur sit amet. Praesent sed bibendum eros. Nullam a efficitur tortor. Donec imperdiet mi et augue iaculis, sit amet auctor ex tempor. Vivamus viverra tortor eget massa porttitor elementum. Nullam tristique maximus elementum. In interdum sollicitudin enim sit amet rhoncus. Sed ut finibus augue. Nulla eget sapien et mauris tempor elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed augue lacus, aliquam nec mauris eu, iaculis convallis erat. Mauris ultricies purus id metus accumsan bibendum.</p>
                            </Col>
                        </Row>
                        <Row className='push'>
                            <Col>
                                <h4>Rent</h4>
                                <p className='para'>Aenean fringilla ut eros in lobortis. Nullam quis elit est. Curabitur ut justo sit amet mi venenatis porta ut eu tortor. Ut tempus sed ante at aliquam. Aenean eu sodales sem. Curabitur luctus euismod elit volutpat pharetra. Suspendisse semper elementum blandit. Sed ac mauris non mi vestibulum dictum vel condimentum est. Aliquam nisl neque, porta quis mollis vel, consequat at nibh. Donec et justo ante. Pellentesque in justo quis eros rhoncus elementum. Integer dapibus, est et tincidunt fermentum, lorem ante fermentum sem, id suscipit nisl metus et lorem. Vivamus quis consequat nibh. Ut mattis tellus at imperdiet interdum. Ut viverra, ante id dignissim tempus, neque libero pharetra sem, et dapibus leo diam non dolor.</p>
                            </Col>
                            <Col><img className='cunts' src={Image1}/></Col>
                        </Row>
                    </Container>
                </center>
            </div>
            <div id='contact'>
                <Container>
                    <center>
                        <h5 id='contactH'>Contact us now...</h5>
                        <div><input type='text' className='long' placeholder='your name...'></input></div>
                        <div><input type='text' className='long' placeholder='e-mail...'></input></div>
                        <div><input type='text' className='long' placeholder='message...'></input></div>
                        <input type='submit' id='commit' value='Send'></input>
                    </center>
                </Container>
            </div>
            <div id='skelewu'>
                <Container>
                    <center>
                        <p>&copy copywrite 2021 website templates</p>
                        <p>powered by goDaddy website builder</p>
                    </center>
                </Container>
            </div>
            

        </div>
      );
}

export default Home;
