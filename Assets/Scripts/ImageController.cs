using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ImageController : MonoBehaviour
{
    public Slider slider1;
    public Slider slider2;
    public Slider slider3;

    public Sprite sprite1;
    public Sprite sprite2;
    public Sprite sprite3;
    
    public Image image;
    void Start()
    {
        image = gameObject.GetComponent<Image>();
    }

    // Update is called once per frame
    void Update()
    {
        ChangeImage();
    }

    void ChangeImage()
    {
        if (slider1.value + slider2.value + slider3.value <= 10) {
            image.sprite = sprite1;
        } else if(slider1.value + slider2.value + slider3.value <= 20) {
            image.sprite = sprite2;
        } else {
            image.sprite = sprite3;
        }
    }
}
