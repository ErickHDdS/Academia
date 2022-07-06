import PhysicalExam from "../../components/PhysicalExam";
import Trainig from "../../components/Training";
import IMC from "../../components/IMC";

import "./style.css";

export default function User() {
  return (
    <section className="user-main">
      <h2 className="user-title">Meus dados</h2>

      <div className="data-doctor">
        <h3>Dados médicos</h3>
        <PhysicalExam />
      </div>

      <div>
        <IMC />
      </div>

      <div className="data-training">
        <h3>Meu treino</h3>
        <Trainig />
      </div>
    </section>
  );
}
