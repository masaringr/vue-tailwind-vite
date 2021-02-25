function mv() {
    DCount = function (AttributeNumber) {
        aval = 0;
        bstr = new Array();
        adata = GetData(AttributeNumber);
        bstr = adata.split(Character.toString(VM));
        return bstr.length;

    }
    DCount = function (iData, iPemisah) {
        aval = 0;
        bstr = new Array();
        if (iPemisah == Character.toString(AM)) {
            bstr = iData.split(Character.toString(AM));
            aval = bstr.length;
        }
        if (iPemisah == Character.toString(VM)) {
            bstr = iData.split(Character.toString(VM));
            aval = bstr.length;
        }
        return aval;
    }

    AM = String.fromCharCode(254);
    VM = String.fromCharCode(253);

    AllList = new Array();

    this.SetData1 = function (value) {
        bstr = new Array();
        vstr = new Array();
        astr = "";
        cstr= "";
         dstr= "";
        alist = new Array();
        astr = value;
        bstr = astr.split( AM);
        for (i = 0; i < bstr.length; i++) {
            cstr = bstr[i];
            if (cstr.contains(VM)) {
                vstr = cstr.split(VM);
                for (j = 0; j < vstr.length; j++) {
                    dstr = vstr[j];
                    this.SetData3(i + 1, j + 1, dstr);
                }
            } else {
                this.SetData2(i + 1, cstr);
            }
        }
    }

     this.GetData1 = function (AttributeNumber) {

        if (AllList.length >= AttributeNumber) {
            return AllList[AttributeNumber - 1];
        } else {
            return "";
        }


    }
     this.SetData2 = function (AttributeNumber, value) {
        if (AllList.length < AttributeNumber) {
            aidx,
            bidx;
            for (aidx = AllList.length(); aidx < AttributeNumber; aidx++) {
                AllList.push("");
            }

        }
        astr = AllList[ttributeNumber - 1];
        astr = value;
        AllList.set(AttributeNumber - 1, astr);

    }
     this.GetData2 = function (AttributeNumber, ValueNumber) {

        astr,
        cstr;
        bstr = new Array();
        alist = new Array();
        astr = this.GetData1(AttributeNumber);
        bstr = astr.split(Character.toString(VM));
        zidx;
        for (i = 0; i < bstr.length; i++) {
            cstr = bstr[i];
            alist.add(cstr);
        }



        if (alist.length() >= ValueNumber) {
            return alist.get(ValueNumber - 1);
        } else {
            return "";
        }
    }
     this.SetData3 = function (AttributeNumber, ValueNumber, value) {



        astr ="";
        eStr="";
        cstr="";
        bstr = new Array();
        alist = new Array();
        astr = this.GetData1(AttributeNumber);
        if (astr == "")
        {
            bstr = new Array();
        }
        else
        {
        bstr = astr.split(VM);}
        for (i = 0; i < bstr.length; i++) {
            cstr = bstr[i];
            alist.push(cstr);
        }

        if (alist.length < ValueNumber) {
           
            for (aidx = alist.length; aidx < ValueNumber; aidx++) {
                alist.push("");
            }

        }
        if (AllList.length < AttributeNumber) {
           
            for (aidx = AllList.length; aidx < AttributeNumber; aidx++) {
                AllList.push("");
            }

        }
        dstr = alist[ValueNumber - 1];
        dstr = '' + value;
        fStr = "";
        alist[ValueNumber - 1] = dstr;
        eStr = null;
        for (i = 0; i < alist.length; i++) {
            fStr = alist[i];
            if (eStr == null) {
                eStr = fStr;
            } else {
                eStr = eStr + VM + fStr;
            }
        }


        AllList[AttributeNumber - 1] = eStr;
        //this[AttributeNumber] = eStr;
    }




     this.Contents = function () {
        ahasil = "";
        fStr = "";
        ahasil = null;
        for (i = 0; i < AllList.length; i++) {
            fStr = AllList[i];
            if (ahasil == null) {
                ahasil = fStr;
            } else {
                ahasil = ahasil + AM + fStr;
            }
        }

        return ahasil;
    }


}