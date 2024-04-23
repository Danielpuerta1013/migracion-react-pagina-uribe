import React from 'react'

const FooterPrincipal = () => {
    return (
        <div className="flex justify-between">
            <div className="w-1/2">
                <p className="text-3xl font-semibold mt-6 mb-4"><strong>MÉTODOS DE PAGO</strong></p>
                <div className="images flex items-center space-x-4">                    
                    <img width="100" height="100" src="https://img.icons8.com/clouds/100/paypal.png" alt="paypal" />
                    <img width="100" height="100" src="https://img.icons8.com/clouds/100/visa.png" alt="visa" />
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/mastercard.png" alt="mastercard" />
                    <img width="100" height="100" src="https://img.icons8.com/office/100/bitcoin.png" alt="bitcoin" />
                    <img width="100" height="100" src="https://img.icons8.com/cotton/100/apple-pay.png" alt="apple-pay" />
                </div>
            </div>
        </div>
    )
}

export default FooterPrincipal
