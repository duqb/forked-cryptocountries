/* eslint-disable import/first,no-unused-vars,prefer-destructuring */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';
import ImageUrl from '../../../../public/countries/au.svg';
import ImageUrl2 from '../../../../public/countries/au.png';
import ModalCompoent from '../../../components/Modal';
import s from './Item.scss';

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const data = this.props.data;
    const name = this.props.data.owner;
    const c =  name.slice(name.length - 6).toUpperCase();
    const i = parseInt(c, 16) > 8388607.5 ? "#FFF" : "#000";
    const bgcolor = "#" + c;
    return (
      <Col xs={6} md={3}>
        <div className={s.card}>
          <a href={`/country/${data.id}`} className={s.countryCardBg}>
            <Image src={ImageUrl2} responsive className={s.flagImg} />
            <div className={s.countryCardName}><span>{data.name}</span></div>
            <Image src={ImageUrl} responsive className={s.countryImg} />
          </a>
          <div className={s.countryCardOwner} style={{color: i, backgroundColor: bgcolor}}><span>OWNER: {data.owner}</span></div>
          {/* <Link to={`/country/${data.id}`}>OWNER:{data.owner}</Link> */}
          <div className={s.content}>
            <div className={s.column}>
              <div className={s.listitem}><div className={s.header}>首都</div>{data.capital}</div>
              <div className={s.listitem}><div className={s.header}>人口</div>{data.population}</div>
            </div>
            <div className={s.column}>
              <div className={s.listitem}><div className={s.header}>语言</div>{data.language}</div>
              <div className={s.listitem}><div className={s.header}>货币</div>{data.currency}</div>
            </div>
          </div>
          <div className={s.purchase}>
            <div className={s.content}>
              <a href="javascript:;">{data.price} ETH</a>
              <ModalCompoent countryData={data} />
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default withStyles(s)(Item);
