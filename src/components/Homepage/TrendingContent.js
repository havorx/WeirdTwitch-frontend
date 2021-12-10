import {Card} from 'react-bootstrap';
import {Radio as RadioIcon, Link as LinkIcon, BarChart2 as BarChart2Icon} from 'react-feather';
import {PRIMARY_COLOR, SUB_PRIMARY_COLOR, PRIMARY_TEXT} from '../../utils/Const';
import {Link} from "react-router-dom";
import Avatar from "react-avatar";

export default function TrendingContent({propWidth, propPadding, roomName, description, roomHost, members}) {

    function handleJoin() {

    }
    return (
        <Card style={{background: 'inherit', width: propWidth, padding: propPadding ? propPadding : 0, border: 'none'}}>
            <Card.Header style={{backgroundColor: `${SUB_PRIMARY_COLOR}`, height: '210px'}}>
                <div className="d-flex justify-content-between ">
                    <div>
                        <RadioIcon style={{color: "#00ff31"}}/>
                        <span className="ms-2">On Air</span>
                    </div>
                    <button className="hoverSecondaryColor"
                            style={{backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT}}>
                        <LinkIcon/>
                    </button>
                </div>
                {members && <div className="pt-3 pb-2 d-flex flex-wrap justify-content-start ">
                    {/* MAX : 21 */}
                    {members.map((element, index) =>

                        <Avatar key={index}
                                name={element.username}
                                className="me-2 mb-2"
                                textSizeRatio={1.8}
                                round={true} size={"45px"}
                                style={{marginRight: "10px"}}/>
                    )}
                </div>}
            </Card.Header>
            <Card.Body style={{backgroundColor: `${PRIMARY_COLOR}}`, paddingLeft: '0'}}>
                <Card.Title>
                    <Link to={`/stream/room/${roomName}`}>{roomName}</Link>
                </Card.Title>
                <Card.Text className="long-and-truncated cut-on-third">{description}</Card.Text>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex">
                        {/*   <img style={{width: '40px', height: '40px', borderRadius: '100%', marginRight: '10px'}}
                             src={image} alt=""/>*/}
                        <Avatar name={roomHost}
                                textSizeRatio={1.8}
                                round={true} size={"40px"}
                                style={{marginRight: "10px"}}/>
                        <div>
                            <div><a>{roomHost}</a></div>
                            <div><a href="">English</a></div>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center align-items-center">
                        <b style={{fontSize: '1.1rem', marginRight: '5px'}}>5.4k</b>
                        <BarChart2Icon/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
