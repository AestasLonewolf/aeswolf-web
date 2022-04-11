import aestas from '../assets/images/aestas.png';
import lonewolf from '../assets/images/lonewolf.png';
import aeswolf from '../assets/images/aeswolf.png';

export default ({ toggle }: { toggle: boolean }) => {
  var show = (visible: boolean) => (visible ? 'opacity-100 delay-[400ms]' : 'opacity-0');
  return (
    <div className="grid">
      <img
        src={aeswolf}
        alt="logo"
        className={`col-[1] row-[1] h-36 duration-700 ease-out ${show(!toggle)}`}
      />
      <img
        src={aestas}
        alt="logo"
        className={`col-[1] row-[1] h-36 duration-500 ease-out ${show(toggle)}`}
      />
      <img
        src={lonewolf}
        alt="logo"
        className={`col-[1] row-[2] h-36 duration-500 ease-out ${show(toggle)}`}
      />
    </div>
  );
};
