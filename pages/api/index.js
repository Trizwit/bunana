import { details } from "../../data/details"

export default  function handler(req,res){
    res.status(200).json(details)
}