import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { serachByCountry } from "../constans/Api";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export default function DetailsPage() {
  const { title } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const goBack = () => {
    navigate(-1);
  };

  console.log(country);
  useEffect(() => {
    fetch(serachByCountry(title))
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [title]);
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack></IoArrowBack> Back
      </Button>
      {country && <Info {...country}></Info>}
    </div>
  );
}
