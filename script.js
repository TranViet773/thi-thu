function checkform(frm)
{
    var mssv=document.getElementById("mssv");
    if(mssv.value==""&&mssv.value.length!=8)
    {
        alert("MSSV sai");
        return false;
    }
    var hten=document.getElementById("ten");
    var qq=document.getElementById("country");
    var checkgt1=document.getElementById("nam").checked;
    var checkgt2=document.getElementById("nu").checked;
    if(hten.value==""||qq.value=="")
    {
        alert("Vui long dien day thong tin!");
        return false;
    }

    //check gt
    if(checkgt1==false&&checkgt2==false)
    {
        alert("Vui long chon gioi tinh!");
        return false;
    }
    //check ngay sinh
    var now=new Date();//ngay hien tai
    var bd=document.getElementById("bd");
    var ngaynhap=new Date(bd.value);//ngay ma ta nhap vao
    if((now-ngaynhap)<=0)
    {
        alert("Nhap sai ngay!");
        return false;
    }


    //check SDT
    var SDT=document.getElementById("phone");
    if(SDT.value.length!=10)
    {
        alert("Vui long nhap so dien thoai co 10 ky tu!");
        return false;
    }

    //email
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;//rang buoc du lieu doi voi email
    var email=document.getElementById("email");
    var repw=document.getElementById("repw");
    if(emailReg.test(email.value)==false )
    {
        alert("Nhap sai email!");
        return false;
    }
    
    var password=document.getElementById("mk");
    
    if(password.value.length!=8)
    {
        alert("Mat khau phai co 8 ky tu!");
        return false;
    }

    if(repw.value!=password.value)
    {
        alert("Xac nhan mat khau chua chinh xac!");
        return false;
    }

    alert("Thong tin Hop le!");

}