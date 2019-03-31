export interface MyInterface {
    myProp;
}

function myFunction(par: number | MyInterface) {
    if ("myProp" in par) {
        par //exactly MyInterface
    }
}

