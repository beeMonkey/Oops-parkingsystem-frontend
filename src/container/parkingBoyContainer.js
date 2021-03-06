import { connect } from 'react-redux'
import parkingBoy from "../compoments/parkingBoy"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
       parkingboyList: state.parkingboyReducers,
       parkinglots: state.parkingLotReducers,
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {

        onGetAllParkingboys: () => {
            Api.getAllParkingboys(dispatch)
        },
        onChangeAccountSataus: (id) => {
            Api.frozenAccount(dispatch,id)
        },
        onUpdateEmployee: (employee) => {
            Api.updateEmployee(dispatch,employee)
        },
        onGetAllParkinglots:()=>{
            Api.getAllParkingLots(dispatch)
        },
        onAssignParkinglot:(userId, ids)=>{
            Api.assignParkinglot(dispatch,userId, ids)
        },

        onDeleteParkinglot:(userId, ids)=>{
            Api.deleteParkinglots(userId, ids, dispatch)
        },
        onUpdateWorkStatus:(parkingBoyId,workStatus,updateParkingBoyList) =>{
            Api.updateWorkStatus(parkingBoyId,workStatus,updateParkingBoyList)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(parkingBoy)