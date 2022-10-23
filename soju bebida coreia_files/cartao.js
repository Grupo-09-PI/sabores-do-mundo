function _onCardChange(selectElement, numParcelasByCcType, code) {
    var selCard = selectElement.options[selectElement.selectedIndex].value;
    //alert(selCard);

    exibeParcelas(numParcelasByCcType[selCard], code);

    if ($(code + '_cc_number')) {
        if (selCard == 'diners'){
            $(code + '_cc_number').setAttribute('maxLength', 14);
        } else {
            $(code + '_cc_number').setAttribute('maxLength', 16);
        }
    }

    if ($(code + '_cc_cid')) {
        if (selCard == 'amex') {
            $(code + '_cc_cid').setAttribute('maxLength', 4);
        }
        else {
            $(code + '_cc_cid').setAttribute('maxLength', 3);
        }
    }

    //quando um tipo de cartao e escolhido, limpa a escolha dos outros campos de tipo de cartao
    var results = $$('select');
    results.each(function(elem){
        if (selectElement != elem && (elem.id.indexOf('cc_type') > 0 || elem.id.indexOf('cc_parcelas') > 0)) {
            elem.value = "";
        }
    });
}

function onCardChange(selCard, numParcelasByCcType, code) {
    if(!select_cc()){
        alert("Selecione uma bandeira de cartão");
    }
    //var selCard = selectElement.options[selectElement.selectedIndex].value;
    //alert(selCard);

    if(numParcelasByCcType && document.getElementById(code+'_cc_parcelas') != null) {
        exibeParcelas(numParcelasByCcType[selCard], code);
        $(code+'_cc_parcelas').value = "";
    }

    if ($(code + '_cc_number')) {
        $(code + '_cc_number').setAttribute('maxLength', 16);
        if (selCard == 'diners'){
            $(code + '_cc_number').setAttribute('maxLength', 14);
        }
        if (selCard == 'hipercard' || selCard == 'aura'){
            $(code + '_cc_number').setAttribute('maxLength', 19);
        }
    }

    if ($(code + '_cc_cid')) {
        if (selCard == 'amex') {
            $(code + '_cc_cid').setAttribute('maxLength', 4);
        }
        else {
            $(code + '_cc_cid').setAttribute('maxLength', 3);
        }
    }
}

function roundNumber(number,decimal_points) {
    if(!decimal_points) return Math.round(number);
    if(number == 0) {
        var decimals = "";
        for(var i=0;i<decimal_points;i++) decimals += "0";
        return "0,"+decimals;
    }
    if(number > 0 && number < 1) {
        var exp = Math.pow(10,decimal_points);
        var n = Math.round((number * exp)).toString();
        return "0," + n.slice(-1*decimal_points);
    }
    var exponent = Math.pow(10,decimal_points);
    var num = Math.round((number * exponent)).toString();
    return num.slice(0,-1*decimal_points) + "," + num.slice(-1*decimal_points);
}

function getCheckedRadioId(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
    return null;
}

function onValueChange(changed, tochange, total, tax, maxp, minv, parsj) {
    var c1 = changed;
    var c2 = tochange;
    tochange = document.getElementById(tochange + '_cc_valor');
    changed = document.getElementById(changed + '_cc_valor');
    if(changed.value.indexOf(",") != -1 )
        changed.value = parseFloat(changed.value.replace(",","."));
    if(parseInt(changed.value) > total) {
        changed.value = total;
        tochange.value = 0;
    }
    else {
        if(isNaN(parseFloat(changed.value)) || parseFloat(changed.value) < 0) {
            changed.value = '0';
        }
        tochange.value = total - changed.value;
    }
    c1 = document.getElementById(c1 + '_cc_parcelas');
    c2 = document.getElementById(c2 + '_cc_parcelas');
    c1.innerHTML = "";
    c2.innerHTML = "";
    getParcelas(c1, changed.value, tax, maxp, minv, parsj);
    getParcelas(c2, tochange.value, tax, maxp, minv, parsj);

    card1 = getCheckedRadioId('payment[cartao1_type]');
    card2 = getCheckedRadioId('payment[cartao2_type]');
    if(card1 != null) {
        card1 = document.getElementById('cartao1_cc_type_'+card1);
        if (typeof card1.onclick == "function") {
            card1.onclick.apply(card1);
        }
    }
    if(card2 != null) {
        card2 = document.getElementById('cartao2_cc_type_'+card2);
        if (typeof card2.onclick == "function") {
            card2.onclick.apply(card2);
        }
    }

    changed.value = roundNumber(((Math.round(changed.value * 100) / 100)),2);
    tochange.value = roundNumber(((Math.round(tochange.value * 100) / 100)),2);
}

function getCreditCardType(s) {
    var ccnumber = s.replace(/\D/g, "");
    var result = "";

    if(/^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}$/.test(ccnumber)) {
      result = "elo";
    }
    else if(/^(((606282)\d{0,10})|((3841)\d{0,12}))$/.test(ccnumber)) {
        result = "hipercard";
    }
    else if(/^5[1-5][0-9]{14}$/.test(ccnumber)) {
        result = "mastercard";
    }
    else if(/^4[0-9]{12}([0-9]{3})?$/.test(ccnumber)) {
        result = "visa";
    }
    else if(/^3[47][0-9]{13}$/.test(ccnumber)) {
        result = "amex";
    }
    else if(/^3(0[0-5]|[68][0-9])[0-9]{11}$/.test(ccnumber)) {
        result = "diners";
    }
    else if(/^6011[0-9]{12}$/.test(ccnumber)) {
        result = "discover";
    }
    else if(/^(?:2131|1800|35\d{3})\d{11}$/.test(ccnumber)) {
        result = "jcb";
    }

    return result;
}

function getDebitCardType(s) {
    var ccnumber = s.replace(/\D/g, "");
    var result = "";

    if(/^5[1-5][0-9]{14}$/.test(ccnumber)) {
        result = "maestro";
    }
    else if(/^4[0-9]{12}([0-9]{3})?$/.test(ccnumber)) {
        result = "visaelectron";
    }
    else if(/^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}$/.test(ccnumber)) {
        result = "elodebito";
    }

    return result;
}


function selectBandeira(ccnumber,code) {
    var bandeira = getCreditCardType(ccnumber);
    bandeira = code+bandeira;
    if(bandeira !== '' && $(bandeira)) {
        document.getElementById(bandeira).click();
    }
}

function selectBandeiraDebito(ccnumber,code) {
    var bandeira = getDebitCardType(ccnumber);
    bandeira = code+bandeira;
    if(bandeira !== '' && $(bandeira)) {
        document.getElementById(bandeira).click();
    }
}

//Card Validation usign Luhn algorithm
function validateCreditCardLibrepag(s) {
    var w = s.replace(/\D/g, ""); //remove all non-digit characters

    if (s.length != w.length){
        return false;

    } else {
        // validate number
        j = w.length / 2;
        k = Math.floor(j);
        m = Math.ceil(j) - k;
        c = 0;
        for (i=0; i<k; i++) {
            a = w.charAt(i*2+m) * 2;
            c += a > 9 ? Math.floor(a/10 + a%10) : a;
        }
        for (i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
        return (c%10 == 0);
    }
}

function validateSecurityCard(s,elem) {
    var w = s.replace(/\D/g, ""); //remove all non-digit characters
    var tamanho = elem.maxLength;
    if (tamanho != w.length){
        return false;
    } else {
        return true;
    }
}


function tokenPagseguro(session, number, month, year, type, cvv, idToken, idHash) {
    PagSeguroDirectPayment.setSessionId(session);

    PagSeguroDirectPayment.createCardToken({
        cardNumber: number,
        brand: type,
        cvv: cvv,
        expirationMonth: month,
        expirationYear: year,
        success: function(callback) {

        },
        error: function(callback) {

        },
        complete: function(callback) {
            idToken.val(callback.card.token);
            idHash.val(PagSeguroDirectPayment.getSenderHash());
        },
    });
}

function validaCartao(v) {
    return validateCreditCardLibrepag(v);
}

function atualizaParcelas(base) {
    var $j = jQuery.noConflict();
    $j("#parcelamento").hide();
    $j.ajax({
            url: base+"librepag/librepag/parcelas",
            cache: false,
            async: true,
            isLoca: true
    })
    .done(function( html ) {
        $j("#parcelamento").html( html );
        $j("#parcelamento").show();
        $j('input[name="payment[cartao_type]"]:checked').trigger('click');
    });
}

function exibeParcelas(numParcelas, code) {
    var comboParcelas = document.getElementById(code + '_cc_parcelas');

    if (comboParcelas != null) {
        if (numParcelas == undefined) {
            numParcelas = comboParcelas.length - 1;
        }
        else {
            if(numParcelas <= (comboParcelas.length - 1)) {
                numParcelas = parseInt(numParcelas);
            }
            else {
                numParcelas = comboParcelas.length-1;
            }
        }

        //exibe o numero de parcelas solicitado. Atencao: o primeiro item do combo nao e parcela: � selecione o numero de parcelas
        for (var n=1; n <= numParcelas; n++) {
            comboParcelas.options[n].disabled = false;
        }
        //oculta o numero de parcelas restante
        for (var n=numParcelas+1; n < comboParcelas.length; n++) {
            comboParcelas.options[n].disabled = true;
        }
    }
}

function getNumParcelas(total, maxp, minv) {
    var nparc = maxp;
    if(minv != '' && !isNaN(minv)) {
        var ppossiveis = Math.floor(total / minv);
        if(ppossiveis < nparc) {
            nparc = ppossiveis;
        }
    }
    if(nparc == '' || isNaN(nparc) || nparc <= 0) {
        nparc = 1;
    }
    return nparc;
}

function getValorParcela(value, parc, tax) {
    var parcsj = 1;
    if(isNaN(value) || value <= 0) {
        return(false);
    }
    if(parseInt(parc) != parc) {
        return(false);
    }
    if(isNaN(tax) || tax < 0) {
        return(false);
    }

    tax = tax / 100;
    var den = 0;
    if(parc > parcsj) {
        for(var i=1;i<=parc;i++) {
            den += 1/Math.pow(1+tax,i);
        }
    } else {
        den = parc;
    }

    return(value/den);
}

function getParcelas(element, total, tax, maxp, minv, parsj) {
    var parctax, parcvalue, text;
    tax = parseFloat(tax);
    parsj = parseInt(parsj);

    element.options[element.options.length] = new Option('-- selecione o número de parcelas --','');
    for(var i=1; i <= getNumParcelas(total,maxp,minv); i++) {
        parctax = 0;
        if(i > parsj) {
            parctax = tax;
        }
        parcvalue = getValorParcela(total, i, parctax);
        //parcvalue = parcvalue.toFixed(2);
        //parcvalue = parcvalue.replace(/./gi,',');
        if(i < parsj+1 || tax == 0) {
            text = i+"x de "+roundNumber(parcvalue,2);
        } else {
            text = i+"x de "+roundNumber(parcvalue,2)+" ("+tax+"% a.m)";
        }
        element.options[element.options.length] = new Option(text, i);
    }
}

function token_or_not(showcvv) {
    hidecvv = typeof hidecvv !== 'undefined' ? hidecvv : false;
    var $j = jQuery.noConflict();
    var type = $$('input[name="payment\\[method\\]"]:checked').first().value;

    if( document.getElementById(type+'_token').value == 'new' ) {
        // Remove disable fields
        $j('.'+type+'_bandeiras :input').prop('disabled',false);
        $j('#'+type+'_cc_number').prop('disabled',false);
        $j('#'+type+'_cc_owner').prop('disabled',false);
        $j('#'+type+'_expiration').prop('disabled',false);
        $j('#'+type+'_expiration_yr').prop('disabled',false);
        $j('#'+type+'_save_token').prop('disabled',false);

        if(!showcvv) {
            $j('#'+type+'_cc_cid').prop('disabled',false);
        }

        // Show new credit card fields
        $j('#'+type+'_credit_card').show();
        $j('#'+type+'_save_token_div').show();
    } else {
        // Disable fields
        $j('.'+type+'_bandeiras :input').prop('disabled',true);
        $j('#'+type+'_cc_number').prop('disabled',true);
        $j('#'+type+'_cc_owner').prop('disabled',true);
        $j('#'+type+'_expiration').prop('disabled',true);
        $j('#'+type+'_expiration_yr').prop('disabled',true);
        $j('#'+type+'_save_token').prop('disabled',true);

        if(!showcvv) {
            $j('#'+type+'_cc_cid').prop('disabled',true);
        }

        // Hide new credit card fields
        $j('#'+type+'_credit_card').hide();
        $j('#'+type+'_save_token_div').hide();
    }
}

function SomenteNumero(e){
    if(select_cc()){
        var tecla=(window.event)?event.keyCode:e.which;
        if((tecla>47 && tecla<58)) return true;
        else
        {
            if (tecla==8 || tecla==0) return true;
            else  return false;
        }

    }else{
        alert("Selecione uma bandeira");
    }
}


function select_cc(){
    var options = $j('input.validate-radio-ipag');
    for( i in options ) {
        if( options[i].checked == true ) {
            return true;
        }
    }
    return false;
}