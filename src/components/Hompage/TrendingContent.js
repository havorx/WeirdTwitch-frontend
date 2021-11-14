import { Card, Button } from 'react-bootstrap';
import { Radio as RadioIcon, Link as LinkIcon, BarChart2 as BarChart2Icon } from 'react-feather';
import image from '../../assets/03-glitch.jpg';
export default function TrendingContent() {
    return (
        <Card style={{ width: '500px', marginRight: '20px' }}>
            <Card.Header style={{ background: 'white', height: '200px' }}>
                <div className="d-flex justify-content-between ">
                    <div>
                        <RadioIcon />
                        <span className="ms-2">On Air</span>
                    </div>
                    <div>
                        <LinkIcon />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Global warming and its effect on agriculture</Card.Title>
                <Card.Text>
                    On today's episode of what's bothering me
                </Card.Text>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex">
                        <img style={{ width: '40px', height: '40px', borderRadius: '100%', marginRight: '10px' }} src={image} alt="" />
                        <div>
                            <div><a href="*">Lord Nearquaard</a></div>
                            <div><a href="*">English</a></div>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center align-items-center">
                        <b style={{ fontSize: '1.1rem', marginRight: '5px' }}>5.4k</b>
                        <BarChart2Icon />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
