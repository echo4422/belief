import java.io.File;
import java.io.IOException;
/*
* @author Laolata
* @description
* @bloghttps://blog.csdn.net/itkfdektxa
* */
public class ConvertEncoding {
    private final static String targetCharset = "GBK";
    private static int count = 0;
    /*
    * @description
    * @param originFile 
    * */
    public static void renameFiles(File originFile) throws Exception {
        //
        if(originFile.isFile()){
            //
            byte[] newName = originFile.getName().getBytes(targetCharset);
            //
            String newNameStr = new String(newName);
            //
            String newPath = originFile.getParent()+File.separator+newNameStr;
            //
            originFile.renameTo(new File(newPath));
            //
            count++;
        }else{
            //
            File[] files = originFile.listFiles();
            for(File f:files){
                renameFiles(f);
            }
        }
    }
    /*
    * @description
    * */
    public static void main(String[] args) throws Exception {
        File file = new File("C:\\Users\\awake8015\\Desktop\\marvtech\\www.marvtech.cn\\tag");
        System.out.println("efg");
        renameFiles(file);
        System.out.println("111"+count+"2222");
    }
}
