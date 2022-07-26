class circle
{
    public static void main(string args[])
    {
        double pi=3.14,r=1,area;
        area=pi*r*r;
        system.out.println("area of area is--");
        system.out.println(area);
    }
}




import java.util.scanner;
class programic
{
    public static void main(string args[])
    {
        scanner sc=new scanner(system.in);
        {
            double r;
            system.out.print("enter the radius:-");
            r = sc.nextDouble();
            double area = Math.PI*r*r;
            system.out.println("area of circle="+area);
        }
    }
}
