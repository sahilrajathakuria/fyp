from django.urls import path
from . import views



urlpatterns = [
    # path('index/', views.index, name ='index'),
    path('nr/', views.NR, name ='NR'),
    path('fpi/', views.FPI, name ='FPI'),
    path('sm/', views.SM, name ='SM'),
    path('bm/', views.BM, name ='BM'),
    path('rfm/', views.RFM, name ='RFM'),
    path('sod/', views.SOD, name ='SOD'),
    path('ndi/', views.NDI, name ='NDI'),
    path('ctr/', views.CTR, name ='CTR'),
    path('csr3/', views.CSR3, name ='CSR3'),
    path('csr8/', views.CSR8, name ='CSR8'),
    path('jm/', views.JM, name ='JM'),
    path('gsm/', views.GSM, name ='GSM'),
    path('gem/', views.GEM, name ='GEM'),
    path('dm/', views.DM, name ='DM'),
    path('cm/', views.CM, name ='CM'),
    path('chm/', views.CHM2, name ='CHM2'),
    path('ev/', views.EV, name ='EV'),

]