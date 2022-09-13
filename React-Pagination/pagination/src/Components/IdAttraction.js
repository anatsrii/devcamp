import { useParams } from "react-router-dom";

export default function IdAttraction  () {
  const params = useParams();
  const attractionId = params.attractionId;
  return (
    <>
    IdAttraction Component {attractionId}
    </>
  )
}