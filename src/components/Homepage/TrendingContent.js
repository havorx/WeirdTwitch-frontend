import { Card } from 'react-bootstrap';
import { Radio as RadioIcon, Link as LinkIcon, BarChart2 as BarChart2Icon } from 'react-feather';
import image from '../../assets/03-glitch.jpg';
import { PRIMARY_COLOR, SUB_PRIMARY_COLOR, PRIMARY_TEXT } from '../../utils/Const';

let arr = Array(30).fill(0)

export default function TrendingContent({ propWidth, propPadding }) {
    return (
        <Card style={{ background: 'inherit', width: propWidth, padding: propPadding ? propPadding : 0 }}>
            <Card.Header style={{ backgroundColor: `${SUB_PRIMARY_COLOR}`, height: '210px' }}>
                <div className="d-flex justify-content-between ">
                    <div>
                        <RadioIcon style={{ color: "#00ff31" }} />
                        <span className="ms-2">On Air</span>
                    </div>
                    <button className="hoverSecondaryColor" style={{ backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT }}>
                        <LinkIcon />
                    </button>
                </div>
                <div className="pt-3 pb-2 d-flex flex-wrap justify-content-start ">
                    {/* MAX : 21 */}
                    {arr.slice(0, 2).map(a =>
                        <img className="me-2 mb-2" src={image} alt="" style={{ width: '45px', height: '45px', borderRadius: '100%', border: `2px solid black` }} />
                    )}
                </div>
            </Card.Header>
            <Card.Body style={{ backgroundColor: `${PRIMARY_COLOR}`, paddingLeft: '0' }}>
                <Card.Title><a href="/bla">Global warming and its effect on agriculture</a></Card.Title>
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
