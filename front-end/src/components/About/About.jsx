const About = () => {
  return (
    <div id='about' className='container'>
      <div className=' mt-[100px] text-center text-primary-blue text-xl'>
        <h2 className=' text-4xl font-bold mb-3'>Về Kenstone Việt Nam</h2>
        <p className=' mb-3 font-semibold'>
          Trong hơn 40 năm phát triển, Kenstone là nhà sản xuất xe đạp và đối
          tác phát triển cho các thương hiệu cao cấp đến từ Bắc Mỹ và Châu Âu
        </p>
        <p className=' mb-3 text-primary-black'>
          Mối quan hệ lâu dài với khách hàng cùng với sự phát triển và cải tiến
          không ngừng về dịch vụ và chất lượng đã định hình lên công ty chúng
          tôi. Chúng tôi đã tạo ra hơn một triệu chiếc xe đạp tại các cơ sở sản
          xuất và phát triển tại Đài Loan và Việt Nam trong những năm qua: Từ
          những chiếc xe đạp dành cho các đội tuyển thi đấu tại Tour de France
          cho đến những chiếc xe đạp thành phố hạng nhất, xe đạp touring và xe
          đạp điện.
        </p>
        <a
          className=' hover:underline'
          href='https://www.kenstone.com.tw/web/about/'
          target='_blank'
        >
          Tìm hiểu thêm về chúng tôi
        </a>
      </div>
    </div>
  );
};

export default About;
