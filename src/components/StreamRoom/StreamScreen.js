import { Card, Button } from 'react-bootstrap'
import { Radio as RadioIcon, Mic, PhoneOff } from 'react-feather'
import { SUB_PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_TEXT } from '../../utils/Const';
import { Link } from 'react-router-dom';
import { X as XIcon } from 'react-feather';
import image from '../../assets/image.webp'
export default function StreamScreen({ roomName, isStreamer, topic, setTopic }) {
    const beigeColor = "#484747fa"

    return (
        <Card className="comment-side d-flex justify-content-between" style={{ backgroundColor: `${SUB_PRIMARY_COLOR}` }}>
            <Card.Header style={{ backgroundColor: `${SUB_PRIMARY_COLOR}`, border: 'none' }}>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex align-items-center">
                        <h2 style={{ color: SECONDARY_COLOR }} className="d-inline me-4">{roomName}</h2>
                        <RadioIcon style={{ color: "#00ff31" }} />
                        <span className="ms-2 me-4">On Air</span>
                        <span>5.4k listening</span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body
                className="background-image h-100 d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div style={{ width: '300px' }}>
                    {topic && <Card style={{ backgroundColor: `${beigeColor}` }}>
                        <Card.Header >
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-0" >{topic.topicName}</h5>
                                {
                                    isStreamer && <Button variant="outline-none" className="p-0"
                                        style={{ color: `${PRIMARY_TEXT}` }}
                                        onClick={() => { setTopic(null) }}
                                    >
                                        <XIcon size={20} />
                                    </Button>
                                }
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-0">{topic.topicDesc}</p>
                        </Card.Body>
                    </Card>}
                </div>
            </Card.Body>
            {
                isStreamer && <Card.Footer className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#232323', border: 'none' }}>
                    <Button className="audio-btn" variant="outline-none"><Mic /></Button>
                    <Button className="audio-btn red-btn" variant="outline-none">
                        <Link to="/">
                            <PhoneOff />
                        </Link>
                    </Button>
                </Card.Footer>
            }

        </Card >
    )
}
