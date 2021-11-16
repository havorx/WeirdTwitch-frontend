import { Modal, Spinner } from 'react-bootstrap'
import { CheckCircle, XCircle } from 'react-feather'
import { SECONDARY_COLOR } from '../../utils/Const'
export default function Loading(props) {

    const spinnerSize = '100px'
    return (<>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: '#18181b', height: '350px' }}
        >
            {!props.loaded ?
                <>
                    <Spinner className="spinner" animation="border" role="status"
                        style={{ width: spinnerSize, height: spinnerSize }}
                    />
                    <br />
                    <h5 className="position-absolute" style={{ bottom: '60px' }}>Checking ...</h5>
                </>
                : <>
                    <CheckCircle className="mb-3" color={SECONDARY_COLOR} size={105} />
                    <h5 className="position-absolute" style={{ bottom: '60px' }}>Checked !</h5>
                </>
            }
        </Modal.Body>


    </>
    )
}
