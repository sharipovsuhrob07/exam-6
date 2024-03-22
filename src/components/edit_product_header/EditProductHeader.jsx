import "../header/Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__title_link">
          <h1 className="header__title">Pедактировать</h1>
          <div>
            <a className="header__link" href="#">
              Главная / Товары / Pедактировать
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
