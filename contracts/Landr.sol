pragma solidity >=0.4.21 <0.7.0;
contract Landr{
    struct form{
        uint id;
    }
    struct buyer{
        string fname;
        string sname;
        string addr;
        string post;
        string city;
        uint pincode;
        uint adhaar;
        uint ration;
        uint phone;
    }
    struct seller{
        string fname;
        string sname;
        string addr;
        string post;
        string city;
        uint pincode;
        uint adhaar;
        uint ration;
        uint phone;
    }
    struct land{
        uint date;
        uint snum;
        string addr;
        uint pincode;
        string north;
        string south;
        string east;
        string west;
        uint m_north;
        uint m_south;
        uint m_east;
        uint m_west;
        uint t_area;
        uint rate;
        string word;
        uint t_rate;
    }
    mapping(uint => form) Trail1;
        uint trailcount1=0;
    mapping(uint => buyer) Trail2;
        uint trailcount2=0;
    mapping(uint => seller) Trail3;
        uint trailcount3=0;
    mapping(uint => land) Trail4;
        uint trailcount4=0;

    function addid(uint id) public {
        form memory newid;
        newid.id = id; 
        Trail1[trailcount1] = newid;
        trailcount1++;
    }
    function addbuyer(string memory fname,
    string memory sname,string memory addr,
    string memory post,string memory city,uint pincode,uint adhaar,
    uint ration,uint phone) public  {
        buyer memory bu;
        bu.fname = fname;
        bu.sname = sname;
        bu.addr = addr;
        bu.post = post;
        bu.city = city;
        bu.pincode = pincode;
        bu.adhaar = adhaar;
        bu.ration = ration;
        bu.phone = phone;
        Trail2[trailcount2] = bu;
        trailcount2++;
    }
     function addseller(string memory fname,string memory sname,
     string memory addr,string memory post,string memory city,
     uint pincode,uint adhaar,uint ration, uint phone)public{
        seller memory se;
       se.fname = fname;
        se.sname = sname;
        se.addr = addr;
        se.post = post;
        se.city = city;
        se.pincode = pincode;
        se.adhaar = adhaar;
        se.ration = ration;
        se.phone = phone;

        Trail3[trailcount3] = se;
        trailcount3++;
        }
    function addlanddetails(uint sfnum,string memory addr,uint pincode,
     string memory north,string memory south,string memory east,string memory west,
     uint m_north,uint m_south,uint m_east,uint m_west,uint t_area,uint rate,string memory word,uint t_rate)public{
        land memory la;
        la.snum = sfnum;
        la.addr = addr;
        la.pincode = pincode;
        la.north = north;
        la.south = south;
        la.east = east;
        la.west = west;
        la.m_north = m_north;
        la.m_south = m_south;
        la.m_east = m_east;
        la.m_west = m_west;
        la.t_area = t_area;
        la.t_rate = t_rate;
        la.rate = rate;
        la.word = word;

        Trail4[trailcount4] = la;
        trailcount4++;
        }

}
