from django.shortcuts import render
from django.http import HttpResponse
import json

from django.views.decorators.csrf import csrf_exempt  
from math import *      
import numpy as np
import scipy
import scipy.linalg
from sympy.parsing.sympy_parser import parse_expr
from sympy import *
import sympy as sym
from django.core.serializers.json import DjangoJSONEncoder  
import numpy as np
import math
def index(request):
    
   return render(request,"index.html")
#     # return HttpResponse("hellow")
def forward_substitution(L, b):

    y = np.full_like(b,0) # Creating the y vector the same size as the b vector
    
    for k in range(len(b)):
        
        y[k] = b[k]
        
        for i in range(k):
            
            y[k] = y[k] - (L[k, i]*y[i])
            
        y[k] = y[k] / L[k, k] # Using forward substitution to find the value of y
    
    # Returning the y vector
    
    return y
def backward_substitution(U, y):
    
    x = np.full_like(y,0) # Creating the x vector the same size as the y vector
    
    for k in range(len(x), 0, -1):
        
      x[k-1] = (y[k-1] - np.dot(U[k-1, k:], x[k:])) / U[k-1, k-1] # Using backward substitution to find the value of x
     
    # Returning the solution vector x
    
    return x
def cholesky(A):
    # A = np.matrix([[1.7,-1.1,2.7],[-1.1,1.6,-1.9],[2.7,-1.9,4.5]])
    # A = scipy.array([[6, 3, 4, 8], [3, 6, 5, 1], [4, 5, 10, 7], [8, 1, 7, 25]])
    L = scipy.linalg.cholesky(A, lower=True)
    U = scipy.linalg.cholesky(A, lower=False)
    return (L, U)
def doolittle(A):
    
  # Creating two L and U matrices filled with 0s and the same size as A

  L = np.zeros_like(A)
  U = np.zeros_like(A)
  n = len(A)
  
  # for-loop in order to set the j,j-th entry of U to 1
    
  for z in range(n):
        
    L[z, z] = 1
    
    U[z, z] = (A[z, z] - np.dot(L[z, :z], U[:z, z]))
    
    for i in range(z+1, n):
        
      U[z, i] = (A[z, i] - np.dot(L[z, :z], U[:z, i]))
    
    for k in range(z+1, n):
        
      L[k, z] = (A[k, z] - np.dot(L[k, :z], U[:z, z])) / U[z, z]

  # Returning the matrices L and U i.e. the A matrix decomposed using Doolittle's algorithm

  return (L, U)
def crout(A):
        
    # Creating two L and U matrices filled with 0s and the same size as A

    L = np.zeros_like(A)
    U = np.zeros_like(A)
    n = len(A)
    
    # for-loop in order to set the j,j-th entry of U to 1
    
    for z in range(n):
        
        U[z,z] = 1             
        
        # for-loop starting at L[j][j] in order to solve the j-th column of L
        
        for j in range(z,n):

            # Declaring a temporary L to store values and insert them later in the L matrix

            temporary_L = float(A[j,z])
            
            for k in range(z):
                
                temporary_L -= L[j,k]*U[k,z]
                
            L[j,z] = temporary_L
            
        # for-loop starting at U[j][j+1] in order to solve the j-th row of U
        
        for j in range(z+1, n):
            
            # Declaring a temporary U to store values and insert them later in the U matrix
            
            temporary_U = float(A[z,j])
            
            for k in range(z):
                
                temporary_U -= L[z,k]*U[k,j]
                
            U[z,j] = temporary_U / L[z,z]
    
    # Returning the matrices L and U i.e. the A matrix decomposed using Crout's algorithm
    
    return (L, U)

def computing_final_solution(A, b, algorithm_used):
    
    # Creating the L and U matrices using the specified algorithm
    
    L, U = algorithm_used(A)
    
    # print("L = " + str(L) + "\n")
    # print("U = " + str(U) + "\n")
    
    # Calling forward then backward substitution
    
    y = forward_substitution(L,b)
    x = backward_substitution(U,y)
    
    # Returning the solution vector x
    
    return x

def eq_to_metrix(sym,eq):
    variables = symbols(sym)
    A, b = linear_eq_to_matrix(eq, variables)
    A=np.array(A).astype(np.float64)
    b=np.array(b).astype(np.float64)
    b=np.ravel(b)
    return (A,b)








@csrf_exempt
def NR(request):
    # @csrf_exempt
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        xn=data['x']
        f=data['eq']
        N=data['n']
        
        final=list()
        x = sym.Symbol('x')
        # xn = float(input('Enter Guess: '))
        # f =input('Enter equestion like 4*x + sin(x) - exp(x): ')
        # N = int(input('Maximum Step: '))
        fderivative = sym.diff(f)
        f=parse_expr(f)
        # print("Derivative",fderivative)
        for i in range(N):
            x1=xn
            b=list()
            xn = xn - float(f.evalf(subs= {x:xn})) / float(fderivative.evalf(subs= {x:xn}))
            er=abs(xn-x1)/abs(xn)
            b.append(i+1)
            b.append(xn)
            b.append(float(f.evalf(subs= {x:xn})))
            b.append(er)
            final.append(b)
            # print(f'The {i+1} iteration xn is {xn} and f(xn) is {float(f.evalf(subs= {x:xn}))},Error {er}')
    return HttpResponse(json.dumps(final))
@csrf_exempt
def FPI(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x0=data['x']
        eq1=data['eq1']
        eq2=data['eq2']
        e=data['tol']
        N=data['n']
        final=list()
        def f(x):
            return eval(eq1) 
        def g(x):
            return eval(eq2)

        # Implementing Fixed Point Iteration Method
        def fixedPointIteration(x0, e, N):
            # print('\n\n*** FIXED POINT ITERATION ***')
            step = 1
            flag = 1
            condition = True
            while condition:
                b=list()
                x1 = g(x0)
                er=abs(x1-x0)/abs(x1)
                # print('Iteration-%d, x1 = %0.6f and f(x1) = %0.6f,and f(x1) = %0.6f' % (step, x1, f(x1),er))
                b.append(str(x1))
                b.append(str(f(x1)))
                b.append(str(er))
                final.append(b)
                x0 = x1

                step = step + 1
                
                if step > N:
                    flag=0
                    break
                
                condition = abs(f(x1)) > e
            # print(final)

            # if flag==1:
            #     print('\nRequired root is: %0.8f' % x1)
            # else:
            #     print('\nNot Convergent.')

        # Input Section
        # x0 = 0
        # e =  0.000001
        # N = 100
        fixedPointIteration(x0,e,N)

        # x0 = float(input('Enter Guess: '))
        # e = float(input('Tolerable Error: '))
        # N = int(input('Maximum Step: '))
        # eq1=input('Enter first equestion like 4*x + sin(x) - exp(x): ')
        # eq2=input('Enter second equestion like 1/4*(exp(x)-sin(x)): ')
       
    return HttpResponse(json.dumps(final, cls=DjangoJSONEncoder))
            
@csrf_exempt
def SM(request):
    if(request.method=="PUT"):
    
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x0=data['x0']
        x1=data['x1']
        eq=data['eq']
        e=data['tol']
        N=data['n']
        
        b=list()
        def f(x):
            return eval(eq) 
        def secant(x0,x1,e,N):
            # print('\n\n*** SECANT METHOD IMPLEMENTATION ***')
            step = 1
            condition = True
            while condition:
                if f(x0) == f(x1):
                    b.append('Divide by zero error!')
                    break
                
                x2 = x0 - (x1-x0)*f(x0)/( f(x1) - f(x0) )
                er=abs(x2-x1)/abs(x2)
                
                # print('Iteration-%d,x0= %0.8f,x1= %0.8f, x2 = %0.8f and f(x2) = %0.8f and error = %0.8f' % (step,x0,x1, x2, f(x2),er))
                b.append([str(step),str(x0),str(x1), str(x2), str(f(x2)),str(er)])
                x0 = x1
                x1 = x2
                step = step + 1
                
                if step > N:
                    break
                condition = er > e
           


        # x0 = 0
        # x1 = 0.5
        # e =  0.000001 
        # N = 100

        # x0 = float(input('Enter First Guess: '))
        # x1 = float(input('Enter Second Guess: '))
        # e = float(input('Tolerable Error: '))
        # N = int(input('Maximum Step: '))
        # eq=input('Enter equestion like 4*x + sin(x) - exp(x): ')
        # Starting Secant Method
        secant(x0,x1,e,N)


    
    return HttpResponse(json.dumps(b, cls=DjangoJSONEncoder))
@csrf_exempt
def BM(request):
    if(request.method=="PUT"):
    
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x0=data['x0']
        x1=data['x1']
        eq=data['eq']
        e=data['tol']
        N=data['n']
        
        b=list()
        def f(x):
            return eval(eq)
        def bisection(x0,x1,e):
            step = 1
            # print('\n\n*** BISECTION METHOD IMPLEMENTATION ***')
            condition = True
            while condition:
                x2 = (x0 + x1)/2
                er=abs(x2-x1)/abs(x2)
                # print('Iteration-%d, x2 = %0.6f and f(x2) = %0.6f' % (step, x2, f(x2)))
                b.append([str(step),str(x0),str(x1), str(x2), str(f(x2)),str(er)])

                if f(x0) * f(x2) < 0:
                    x1 = x2
                else:
                    x0 = x2
                if(step>=N):
                    break
                step = step + 1
                condition = abs(f(x2)) > e

            print('\nRequired Root is : %0.8f' % x2)



        # x0 = 2
        # x1 = 3
        # e = 0.0001


        #Note: You can combine above two section like this
        # x0 = float(input('First Guess: '))
        # x1 = float(input('Second Guess: '))
        # e = float(input('Tolerable Error: '))
        # eq=input('Enter equestion like x**3-4*x-5": ')


        # Checking Correctness of initial guess values and bisecting
        if f(x0) * f(x1) > 0.0:
            b.append('Given guess values do not bracket the root.Try Again with different guess values.')
            
        else:
            bisection(x0,x1,e)
     
        
        
    return HttpResponse(json.dumps(b, cls=DjangoJSONEncoder))
@csrf_exempt    
def RFM(request):
    if(request.method=="PUT"):
    
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x0=data['x0']
        x1=data['x1']
        eq=data['eq']
        e=data['tol']
        N=data['n']
        b=list()
        # b.append(x0)
        # b.append(eq)
        
        def f(x):
            return eval(eq)

# Implementing False Position Method
        step = 1
        # print('\n\n*** regula falsi METHOD IMPLEMENTATION ***')
        # condition = True
        for i in range(N):
            x2 = x0 - (x1-x0) * f(x0)/( f(x1) - f(x0) )
            # x2 = x0 - (x1-x0) * f(x0)/( f(x1) - f(x0) )
            er=abs(x2-x1)/abs(x2)
            # print('Iteration-%d,x0 = %0.8f,x1 = %0.8f x2 = %0.8f and f(x2) = %0.8fand err = %0.8f' % (step,x0,x1, x2, f(x2),er))
            b.append([str(step),str(x0),str(x1), str(round(x2,8)), str(round(f(x2),8)),str(round(er,8))])
            print("sfgd",x2)

            if f(x0) * f(x2) < 0:
                x1 = round(x2,8)
            else:
                x0 = round(x2,8)

            step = step + 1
            if( abs(f(x2)) < e):
                print(i)
                break

            # print('\nRequired root is: %0.8f' % x2)


        # Input Section
        # x0 = 0
        # x1 = 1
        # e = 0.000001

        # x0 = float(input('First Guess: '))
        # x1 = float(input('Second Guess: '))
        # e = float(input('Tolerable Error: '))
        # eq=input('Enter first equestion like 4*x + sin(x) - exp(x): ')
        # N = int(input('Maximum Step: '))
            
             
    return HttpResponse(json.dumps(b))
@csrf_exempt
def SOD(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x=data['x']
        f=data['f']
        xp=data['xp']
        dic={}
        if(len(x)==len(f)):
            n=len(x)-1
            ddf=[[0 for i in range(n+1)]for j in range(n+1)]
        
            #.........................Processing Section.............
            for i in range(n+1):
                ddf[i][0]=f[i]
            for j in range(1,n+1):
                for i in range(n-j+1):
                    ddf[i][j]=(ddf[i+1][j-1]-ddf[i][j-1])/(x[i+j]-x[i])
            pro=1
            fxp=ddf[0][0]
            for k in range(n+1):
                pro=pro*(xp-x[k-1])
                fxp=fxp+pro*ddf[0][k]
            #......................Output Section..............................
            dic['out']=fxp
    return HttpResponse(json.dumps(dic))
@csrf_exempt
def NDI(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        x=data['x']
        f=data['f']
        xp=data['xp']
        dic={}
        if(len(x)==len(f)):
            n=len(x)-1
            ddf=[[0 for i in range(n+1)] for j in range(n+1)]
            for i in range(n+1):
                ddf[i][0]=f[i]
            for j in range(1,n+1):
                for i in range(n-j+1):
                    ddf[i][j]=(ddf[i+1][j-1]-ddf[i][j-1])/(x[i+j]-x[i])
            pro=1
            fxp=ddf[0][0]
            for k in range(1,n+1):
                pro=pro*(xp-x[k-1])
                fxp=fxp+pro*ddf[0][k]
            dic['out']=fxp
    return HttpResponse(json.dumps(dic))
@csrf_exempt
def CTR(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        lower_limit=data['x0']
        eq=data['eq']
        upper_limit=data['xn']
        sub_interval=data['n']
        b=list()
        def f(x):
            return eval(eq)

        # Implementing trapezoidal method
        def trapezoidal(x0,xn,n):
            # calculating step size
            h = (xn - x0) / n
            
            # Finding sum 
            integration = f(x0) + f(xn)
            
            for i in range(1,n):
                k = x0 + i*h
                b.append([str(i),str(k),str(f(k))])
                # print("Xj :",k)
                # print("f(Xj) :",f(k))
                integration = integration + 2 * f(k)
                
            
            # Finding final integration value
            integration = integration * h/2
            
            return integration
            
        # Input section
        # lower_limit = 0
        # upper_limit = 2
        # sub_interval = 10
        # eq= "sqrt(x**2+1)"

        # Call trapezoidal() method and get result
        res = trapezoidal(lower_limit, upper_limit, sub_interval)
        # print(res)
        # b.append((str(res)))

    return HttpResponse(json.dumps(b))
@csrf_exempt
def CSR3(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        lower_limit=data['x0']
        eq=data['eq']
        upper_limit=data['xn']
        sub_interval=data['n']
        b=list()
        def f(x):
            return eval(eq)

        # Implementing Simpson's 1/3 
        def simpson13(x0,xn,n):
            # calculating step size
            h = (xn - x0) / n
            
            # Finding sum 
            integration = f(x0) + f(xn)
            
            for i in range(1,n):
                k = x0 + i*h
                b.append([str(i+1),str(k),str(f(k))])
                # print("Xj",k)
                # print("f(Xj)",f(k))
                if i%2 == 0:
                    integration = integration + 2 * f(k)
                else:
                    integration = integration + 4 * f(k)
            
            # Finding final integration value
            integration = integration * h/3
            
            return integration
            
        # Input section
        # lower_limit = float(input("Enter lower limit of integration: "))
        # upper_limit = float(input("Enter upper limit of integration: "))
        # sub_interval = int(input("Enter number of sub intervals: "))
        # eq=input('Enter  equestion like sqrt(x**2+1): ')
        # Call trapezoidal() method and get result
        result = simpson13(lower_limit, upper_limit, sub_interval)
        # b.append(str(result))
        
    return HttpResponse(json.dumps(b, cls=DjangoJSONEncoder))
@csrf_exempt
def CSR8(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        lower_limit=data['x0']
        eq=data['eq']
        upper_limit=data['xn']
        sub_interval=data['n']
        b=list()
        def f(x):
            return eval(eq)

        # Implementing Simpson's 3/8
        def simpson38(x0,xn,n):
            # calculating step size
            h = (xn - x0) / n
            
            # Finding sum 
            integration = f(x0) + f(xn)
            
            for i in range(1,n):
                k = x0 + i*h
                b.append([str(i+1),str(k),str(f(k))])
                # print("Xj",k)
                # print("f(Xj)",f(k))
                if i%2 == 0:
                    integration = integration + 2 * f(k)
                else:
                    integration = integration + 3 * f(k)
            
            # Finding final integration value
            integration = integration * 3 * h / 8
            
            return integration
            
        # Input section
        # lower_limit = float(input("Enter lower limit of integration: "))
        # upper_limit = float(input("Enter upper limit of integration: "))
        # sub_interval = int(input("Enter number of sub intervals: "))
        # eq=input('Enter  equestion like sqrt(x**2+1): ')
        # Call trapezoidal() method and get result
        result = simpson38(lower_limit, upper_limit, sub_interval)
        # b.append(str(result))
      
    return HttpResponse(json.dumps(b,cls=DjangoJSONEncoder))
@csrf_exempt
def JM(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        tol=data['tol']
        n=data['n']
        final=list()
        # import numpy as np
        # sym=input("Enter  Variable with , sperated like x,y,z: ")
        # eq=input("Enter eq like 0.4*x+0.12*z-1.4,0.64*y+0.32*z-1.6,0.12*x+0.32*y+0.56*z-5.4 :  ")
        # tol = float(input("Enter tol like 0.000001:  "))
        # n= int(input('Maximum Step: '))
        variables = symbols(sym)
        A, b = linear_eq_to_matrix(eq, variables)
        A=np.array(A).astype(np.float64)
        b=np.array(b).astype(np.float64)
        b=np.ravel(b)
        # print(A)
        # print(b)


        x = np.zeros(len(A[0]))

        # Create a vector of the diagonal elements of A                                                                                                                                                
        # and subtract them from A                                                                                                                                                                     
        D = np.diag(A)
        R = A - np.diagflat(D)


        # Iterate for N times                                                                                                                                                                          
        for i in range(n):
            sum=0
            z=x
            x = (b - np.dot(R,x)) / D
            gh=x
           
            for j in range(len(A[0])):
                sum+=(x[j]- z[j])**2
            err=sqrt(sum)
            # print("l2 norms{:.6f}  ".format(err))
            # gh=gh.tolist()
            gk=[str(a) for a in gh]
            gk.append(str(err))

            final.append(gk)
            if(err<tol):
                break
        # print("sol",x)
        # sol = jacobi(A,b,N)
        # print ("sol:",sol)

    return HttpResponse(json.dumps(final))
@csrf_exempt
def GSM(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        tol=data['tol']
        n=data['n']
        final=list()
        def gauss_seidel(A, b, tolerance, max_iterations):
            x = np.zeros_like(b, dtype=np.double)
            for k in range(max_iterations):
                
                x_old  = x.copy()
                
                #Loop over rows
                for i in range(A.shape[0]):
                    x[i] = (b[i] - np.dot(A[i,:i], x[:i]) - np.dot(A[i,(i+1):], x_old[(i+1):])) / A[i ,i]
                gh=x
                    
                #Stop condition 
                sum=0
                for j in range(len(A[0])):
                    sum+=(x[j]- x_old[j])**2
                er=sqrt(sum)
                gk=[str(a) for a in gh]
                gk.append(str(er))

                final.append(gk)
                if er< tolerance:
                    break
                    
            return x
        # print('the gauss_seidel iterative method')
        # import numpy as np
        # sym=input("Enter  Variable with , sperated like x,y,z: ")
        # eq=input("Enter eq like 0.4*x+0.12*z-1.4,0.64*y+0.32*z-1.6,0.12*x+0.32*y+0.56*z-5.4 :  ")
        # tol = float(input("Enter tol like 0.000001:  "))
        # n= int(input('Maximum Step: '))
        # from sympy import *
        variables = symbols(sym)
        A, b = linear_eq_to_matrix(eq, variables)
        A=np.array(A).astype(np.float64)
        b=np.array(b).astype(np.float64)
        b=np.ravel(b)
        # print(A)
        # print(b)
        gauss_seidel(A,b,tol,n)
        
        
    return HttpResponse(json.dumps(final))
@csrf_exempt
def GEM(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
     
        
        variables = symbols(sym)
        A, b = linear_eq_to_matrix(eq, variables)
        a=np.array(A).astype(np.float64)
        b=np.array(b).astype(np.float64)
        b=np.ravel(b)
        re=[]
        n=len(a[0])
        # a = [[1.7,2.3,-1.5],[1.1,1.6,-1.9],[2.7,-2.2,1.5]]
        # b = [2.35,-0.94,2.7]
        x = [0]*n
        for i in range(n-1):
            r = i
            for j in range(i+1,n):
                if abs(a[r][i]) < abs(a[j][i]):
                    r = j
                if a[r][i] == 0:
                    return HttpResponse(json.dumps(["The system has no unique solution."]))
                    break
                elif r != i:
                    for j in range(n):
                        temp = a[i][j]
                        a[i][j] = a[r][j]
                        a[r][j] = temp
                    temp1 = b[i]
                    b[i] = b[r]
                    b[r] = temp1
                    for k in range(i+1,n):
                        multiplier = a[k][i]/a[i][i]
                        for j in range(i+1,n):
                            a[k][j] = a[k][j] - multiplier * a[i][j]
                        b[k] = b[k] - multiplier * b[i]
            if a[n-1][n-1] == 0:
                return HttpResponse(json.dumps(["The system has no unique solution."]))
                break
            else:
                
                x[n-1] = b[n-1]/a[n-1][n-1]
            for i in reversed(range(n-1)):
                sum = 0.0
                for j in range(i+1,n):
                    sum = sum + a[i][j] * x[j]
                x[i] = (b[i] - sum)/a[i][i]
            # print("The solution of the given system is ")
        re.append(x)
        
           
    return HttpResponse(json.dumps(re))

@csrf_exempt
def DM(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        A,b=eq_to_metrix(sym,eq)
        x=computing_final_solution(A,b, doolittle)
        x=np. around(x, 2)
        x=x.tolist()
        
    return HttpResponse(json.dumps(x))

@csrf_exempt
def CM(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        A,b=eq_to_metrix(sym,eq)
        
        x=computing_final_solution(A,b, crout)
        x=np. around(x, 2)
        x=x.tolist()
    return HttpResponse(json.dumps(x))
@csrf_exempt
def EV(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        m,b=eq_to_metrix(sym,eq)
        w, v = np.linalg.eig(m)
        w=w.tolist()
        v=v.tolist()
        x=list()
        x.append(w)
        x.append(v)
               
    return HttpResponse(json.dumps(x))
@csrf_exempt
def CHM2(request):
    if(request.method=="PUT"):
        body_unicode=   request.body.decode('utf-8')
        data=json.loads(body_unicode)
        sym=data['sym']
        eq=data['eq']
        A,b=eq_to_metrix(sym,eq)
        
        x=computing_final_solution(A,b, cholesky)
        x=np. around(x, 2)
        x=x.tolist()
        
    
    
    return HttpResponse(json.dumps(x))
            
        #     linear_system(n, a, b) # Function call
        




        
# Create your views here.
# Create your views here.
