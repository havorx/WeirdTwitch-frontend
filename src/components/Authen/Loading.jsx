import { Modal, Spinner } from 'react-bootstrap'
import { CheckCircle, XCircle } from 'react-feather'
import { SECONDARY_COLOR } from '../../utils/Const'
export default function Loading({ loaded }) {

    const render = () => {
        if (loaded === 0) {
            return <>
                <Spinner className="spinner" animation="border" role="status"
                    style={{ width: spinnerSize, height: spinnerSize }}
                />
                <br />
                <h5 className="position-absolute" style={{ bottom: '60px' }}>Loading ...</h5>
            </>
        } else if (loaded === 1) {
            console.log("loaded")
            return <>
                <CheckCircle className="mb-3" color={SECONDARY_COLOR} size={105} />
                <h5 className="position-absolute" style={{ bottom: '60px' }}>Success !</h5>
            </>
        } else if (loaded === -1) {
            return <>
                <XCircle className="mb-3" color={SECONDARY_COLOR} size={105} />
                <h5 className="position-absolute" style={{ bottom: '60px' }}>FAILED !</h5>
            </>
        }
    }


    const spinnerSize = '100px'
    return (<>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: '#18181b', height: '350px' }}
        >
            {
                render()
            }
        </Modal.Body>


    </>
    )
}
